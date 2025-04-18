// lib/api.js
import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api'

export const getTopUsers = async () => {
  const res = await axios.get(`${API_BASE_URL}/users/top`)
  return res.data
}

export const getTrendingPosts = async () => {
  const res = await axios.get(`${API_BASE_URL}/posts/trending`)
  return res.data
}

export const getLiveFeed = async () => {
  const res = await axios.get(`${API_BASE_URL}/posts/feed`)
  return res.data
}
