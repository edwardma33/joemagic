import crypto from 'crypto'
import { clearAdminCookie, isAdmin, setAdminCookie } from '@/lib/admin-auth'

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json({ authenticated: isAdmin(req) })
  if (req.method === 'DELETE') { clearAdminCookie(res); return res.status(204).end() }
  if (req.method !== 'POST') return res.status(405).end()
  const expected = process.env.ADMIN_PASSWORD || ''
  const supplied = req.body?.password || ''
  if (!expected || supplied.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))) return res.status(401).json({ error: 'Incorrect password' })
  setAdminCookie(res)
  return res.status(200).json({ authenticated: true })
}
