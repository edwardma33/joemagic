import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

export function getAdminSupabase() {
  const { NEXT_PUBLIC_SUPABASE_URL: url } = process.env
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Supabase admin credentials are not configured')
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
}

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error('Stripe is not configured')
  return new Stripe(process.env.STRIPE_SECRET_KEY)
}
