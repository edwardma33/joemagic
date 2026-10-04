# Store setup

## 1. Apply the catalog migration

The catalog migrations in `supabase/migrations/` have been applied to the connected project. Ensure `public.products` is enabled for the Data API in **Project Settings → Data API**; newly created tables are not exposed automatically.

## 2. Upload product images

The public `product-images` bucket is already configured. Upload product images there (for example, `wand-kit.jpg`), then save that exact object path as `image_path` in the product record. This bucket accepts JPEG, PNG, and WebP images up to 5 MB; upload and editing remain dashboard-only.

## 3. Add a product

Create the matching product, USD price, and Payment Link in Stripe. Enable adjustable quantity and configure US shipping in that Payment Link. Then add a row to `products` in Supabase:

| Field | Example |
| --- | --- |
| `name` | Magic Wand Kit |
| `slug` | magic-wand-kit |
| `description` | A short storefront description. |
| `price_cents` | 2500 |
| `currency` | usd |
| `image_path` | magic-wand-kit.jpg |
| `stripe_payment_link` | Stripe-hosted Payment Link URL |
| `is_active` | true |
| `sort_order` | 10 |

## 4. Configure the website

Copy `.env.example` to `.env.local` and enter the Supabase Project URL and publishable key from the Supabase Connect panel. Set the same two variables in the deployment environment. Never commit a `DATABASE_URL`, service-role key, or database password.

## 5. Use the shop admin

Set `SUPABASE_SECRET_KEY`, `STRIPE_SECRET_KEY`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` in `.env.local` and in the deployment environment. These values are server-only—do not give them a `NEXT_PUBLIC_` prefix. `SUPABASE_SECRET_KEY` is the current Supabase Secret key; the legacy `SUPABASE_SERVICE_ROLE_KEY` name is also accepted.

Open `/admin`, sign in with `ADMIN_PASSWORD`, then add a product. One submission uploads the product image to Supabase Storage, creates the Stripe product, USD price, standard US shipping rate, and adjustable-quantity Payment Link, and saves the resulting storefront record. Use a Stripe test secret key until you are ready to take real payments.
