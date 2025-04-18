// app/api/users/top/route.js
import { users } from '@/lib/mockData'

export async function GET() {
  const sorted = [...users].sort((a, b) => b.posts - a.posts).slice(0, 5)
  return Response.json(sorted)
}
