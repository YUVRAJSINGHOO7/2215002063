// app/api/posts/trending/route.js
import { posts } from '@/lib/mockData'

export async function GET() {
  const maxComments = Math.max(...posts.map(post => post.comments))
  const trending = posts.filter(post => post.comments === maxComments)
  return Response.json(trending)
}
