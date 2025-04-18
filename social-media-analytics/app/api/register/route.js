// File: app/api/register/route.js

export async function POST(req) {
    const body = await req.json()
  
    try {
      const response = await fetch('http://20.244.56.144/evaluation-service/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
  
      const data = await response.json()
  
      if (!response.ok) {
        return new Response(JSON.stringify(data), { status: response.status })
      }
  
      return Response.json(data)
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Something went wrong', details: error.message }), {
        status: 500,
      })
    }
  }
  