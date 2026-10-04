create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  price_cents integer not null check (price_cents >= 0),
  currency text not null default 'usd' check (currency ~ '^[a-z]{3}$'),
  image_path text not null,
  stripe_payment_link text not null check (stripe_payment_link ~ '^https://'),
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index products_active_sort_order_idx
  on public.products (sort_order, name)
  where is_active = true;

alter table public.products enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.products to anon, authenticated;

create policy "Anyone can read active store products"
  on public.products
  for select
  to anon, authenticated
  using (is_active = true);
