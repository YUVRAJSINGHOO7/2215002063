import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Social Media Analytics',
  description: 'Real-time social media insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 min-h-screen">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">📊 Social Media Analytics</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/register" className="text-blue-600 hover:underline">Register Company</Link>
            <Link href="/auth" className="text-blue-600 hover:underline">Get Token</Link>
            <Link href="/top-users" className="text-blue-600 hover:underline">Top Users</Link>
            <Link href="/trending" className="text-blue-600 hover:underline">Trending Posts</Link>
            <Link href="/feed" className="text-blue-600 hover:underline">Feed</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
