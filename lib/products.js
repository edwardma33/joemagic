import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

export async function getActiveProducts() {
  if (!supabaseUrl || !supabasePublishableKey) {
    return { products: [], configured: false }
  }

  const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const { data, error } = await supabase
    .from('products')
    .select('id, name, slug, description, price_cents, currency, image_path, stripe_payment_link')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
    .order('name', { ascending: true })

  if (error) throw error

  return { products: data, configured: true }
}

export function getProductImageUrl(imagePath) {
  return `${supabaseUrl}/storage/v1/object/public/product-images/${imagePath}`
}
