// File: app/users/page.js

'use client'
import { useEffect, useState } from 'react'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users')
        const data = await res.json()

        if (res.ok) {
          setUsers(data)
        } else {
          setError(data.error || 'Failed to fetch users')
        }
      } catch (err) {
        setError('Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="p-4 border rounded shadow-sm bg-white">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">@{user.username}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
