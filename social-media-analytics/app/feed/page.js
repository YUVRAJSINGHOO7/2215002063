// app/feed/page.js
'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from '@/components/PostCard'

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios.get('/api/posts/feed').then(res => setPosts(res.data))
    }

    fetchData()
    const interval = setInterval(fetchData, 5000) // Poll every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Live Feed</h1>
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </main>
  )
}
