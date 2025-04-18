// app/api/posts/feed/route.js
import { posts } from '@/lib/mockData'

export async function GET() {
  const sorted = [...posts].sort((a, b) => b.id - a.id) // newest first
  return Response.json(sorted)
}
