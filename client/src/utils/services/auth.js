import axios from 'axios'

export const authAPI = {
  login: async (data) => {
    return await axios.post('/api/login', data)
  },
  register: async (data) => {
    return await axios.post('/api/register', data)
  },
  logout: async () => {
    return await axios.get('/api/logout')
  },
  refresh_token: async () => {
    return await axios.get('/api/refresh_token')
  },
}
