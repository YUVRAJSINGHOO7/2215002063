
'use client'
import { useState, useEffect } from 'react'

export default function AuthPage() {
  const [form, setForm] = useState({
    companyName: '',
    clientID: '',
    clientSecret: '',
  })

  const [token, setToken] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('token')
    if (stored) setToken(stored)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        setError(null)
      } else {
        setError(data.error || 'Invalid credentials')
        setToken(null)
      }
    } catch (err) {
      setError('Something went wrong')
      setToken(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Get Auth Token</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['companyName', 'clientID', 'clientSecret'].map((field) => (
          <div key={field}>
            <label className="block capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Getting Token...' : 'Get Token'}
        </button>
      </form>

      {token && (
        <div className="mt-6 p-4 border rounded bg-gray-100 text-sm">
          <strong>Token:</strong>
          <pre className="break-all mt-2">{token}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600 font-medium">
          {error}
        </div>
      )}
    </main>
  )
}
