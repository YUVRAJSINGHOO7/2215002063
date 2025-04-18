// app/trending/page.js
'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from '@/components/PostCard'

export default function TrendingPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/posts/trending').then(res => setPosts(res.data))
  }, [])

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Trending Posts</h1>
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </main>
  )
}
