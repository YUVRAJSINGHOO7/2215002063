// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-10 text-center space-y-6">
      <h1 className="text-4xl font-bold">📊 Social Media Analytics</h1>
      <p className="text-gray-600">Monitor activity, track trends, and stay up to date</p>
      <div className="flex justify-center gap-6 mt-8">
        <Link
          href="/feed"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Real-Time Feed
        </Link>
        <Link
          href="/top-users"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Top Users
        </Link>
        <Link
          href="/trending"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Trending Posts
        </Link>
      </div>
    </main>
  )
}
