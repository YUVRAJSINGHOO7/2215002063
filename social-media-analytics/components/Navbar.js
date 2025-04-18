// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex gap-4">
      <Link href="/feed" className="hover:underline">Feed</Link>
      <Link href="/top-users" className="hover:underline">Top Users</Link>
      <Link href="/trending" className="hover:underline">Trending Posts</Link>
    </nav>
  )
}
