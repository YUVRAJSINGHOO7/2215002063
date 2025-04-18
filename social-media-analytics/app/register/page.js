'use client'
import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: '',
  })

  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setResponse({ error: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Company Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label className="block capitalize">{field.replace(/([A-Z])/g, ' $1')}:</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </main>
  )
}
