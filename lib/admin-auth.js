import crypto from 'crypto'

const COOKIE_NAME = 'joemagic_admin'
const maxAge = 60 * 60 * 12

function secret() { return process.env.ADMIN_SESSION_SECRET }

function signature(value) {
  return crypto.createHmac('sha256', secret()).update(value).digest('base64url')
}

export function createAdminSession() {
  if (!secret()) throw new Error('ADMIN_SESSION_SECRET is not configured')
  const value = Buffer.from(JSON.stringify({ exp: Date.now() + maxAge * 1000 })).toString('base64url')
  return `${value}.${signature(value)}`
}

export function isAdmin(req) {
  if (!secret() || !req.cookies?.[COOKIE_NAME]) return false
  const [value, receivedSignature] = req.cookies[COOKIE_NAME].split('.')
  if (!value || !receivedSignature) return false
  const expectedSignature = signature(value)
  if (receivedSignature.length !== expectedSignature.length || !crypto.timingSafeEqual(Buffer.from(receivedSignature), Buffer.from(expectedSignature))) return false
  try { return JSON.parse(Buffer.from(value, 'base64url').toString()).exp > Date.now() } catch { return false }
}

export function setAdminCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=${createAdminSession()}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`)
}

export function clearAdminCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`)
}

export function requireAdmin(req, res) {
  if (isAdmin(req)) return true
  res.status(401).json({ error: 'Unauthorized' })
  return false
}
