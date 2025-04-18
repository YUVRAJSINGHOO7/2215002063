// File: app/layout.js

import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Social Media Analytics',
  description: 'Track top users, trending posts, and real-time feed.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Social Media Analytics</h1>
          <nav className="space-x-4">
            <Link href="/feed" className="text-gray-700 hover:text-black">Feed</Link>
            <Link href="/top-users" className="text-gray-700 hover:text-black">Top Users</Link>
            <Link href="/trending" className="text-gray-700 hover:text-black">Trending</Link>
            <Link href="/register" className="text-blue-500 hover:underline">Register Company</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
