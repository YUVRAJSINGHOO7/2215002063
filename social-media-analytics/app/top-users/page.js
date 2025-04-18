'use client'
import { useEffect, useState } from 'react'
import { getTopUsers } from '@/lib/api'
import UserCard from '@/components/UserCard'

export default function TopUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopUsers()
      setUsers(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Top Users</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </main>
  )
}
