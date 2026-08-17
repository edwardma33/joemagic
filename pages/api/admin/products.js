import { getAdminSupabase, getStripe } from '@/lib/admin-store'
import { requireAdmin } from '@/lib/admin-auth'

export const config = { api: { bodyParser: { sizeLimit: '7mb' } } }

function slugify(value) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return
  if (req.method === 'GET') {
    try { const { data, error } = await getAdminSupabase().from('products').select('*').order('sort_order').order('name'); if (error) throw error; return res.status(200).json({ products: data }) } catch (error) { return res.status(500).json({ error: error.message }) }
  }
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const { name, description, price, shipping, sortOrder, imageData } = req.body
    const priceCents = Math.round(Number(price) * 100); const shippingCents = Math.round(Number(shipping) * 100)
    if (!name || !description || !Number.isInteger(priceCents) || priceCents < 0 || !Number.isInteger(shippingCents) || shippingCents < 0 || !imageData?.startsWith('data:image/')) throw new Error('Complete every field and choose a JPG, PNG, or WebP image.')
    const match = imageData.match(/^data:(image\/(?:jpeg|png|webp));base64,(.+)$/)
    if (!match) throw new Error('Use a JPG, PNG, or WebP image.')
    const ext = match[1] === 'image/jpeg' ? 'jpg' : match[1].split('/')[1]
    const slug = `${slugify(name)}-${Date.now()}`
    const imagePath = `${slug}.${ext}`
    const supabase = getAdminSupabase()
    const upload = await supabase.storage.from('product-images').upload(imagePath, Buffer.from(match[2], 'base64'), { contentType: match[1], upsert: false })
    if (upload.error) throw upload.error
    const { data: image } = supabase.storage.from('product-images').getPublicUrl(imagePath)
    let stripePaymentLink = null
    if (process.env.STRIPE_SECRET_KEY) {
      const stripe = getStripe()
      const product = await stripe.products.create({ name, description, images: [image.publicUrl], shippable: true })
      const stripePrice = await stripe.prices.create({ product: product.id, currency: 'usd', unit_amount: priceCents })
      const shippingRate = await stripe.shippingRates.create({ display_name: 'Standard shipping', type: 'fixed_amount', fixed_amount: { amount: shippingCents, currency: 'usd' } })
      const paymentLink = await stripe.paymentLinks.create({ line_items: [{ price: stripePrice.id, quantity: 1, adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 } }], shipping_address_collection: { allowed_countries: ['US'] }, shipping_options: [{ shipping_rate: shippingRate.id }], submit_type: 'pay' })
      stripePaymentLink = paymentLink.url
    }
    const { data, error } = await supabase.from('products').insert({ name, slug, description, price_cents: priceCents, currency: 'usd', image_path: imagePath, stripe_payment_link: stripePaymentLink, is_active: true, sort_order: Number(sortOrder) || 0 }).select().single()
    if (error) throw error
    return res.status(201).json({ product: data })
  } catch (error) { return res.status(400).json({ error: error.message || 'Could not create product.' }) }
}
