import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

api.interceptors.request.use(
  (config) => {
    const savedState = JSON.parse(window.localStorage.getItem('@AUTH'))
    if (savedState) {
      config.headers.Authorization = 'Bearer' + savedState.jwt
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const strapiLoginLocal = async (credentials) => {
  const response = await api.post('/auth/local', credentials)
  return response.data
}

const strapiRegisterLocal = async (credentials) => {
  const response = await api.post('/auth/local/register', credentials)
  return response.data
}

const strapiCreateGame = async (data) => {
  const body = {
    data: {
      name: data.name,
      users: [
        data.userId
      ]
    }
  }
  const response = await api.post('/games', body)
  return response.data
}

export {
  strapiLoginLocal,
  strapiRegisterLocal,
  strapiCreateGame
}
