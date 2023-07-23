import { useState } from 'react'
import axios from 'axios'
import { useUserStore } from '../../redux/hooks/useUser'

const Login = async ({ email, password }) => {
  try {
    const res = await axios.post(
      `http://${process.env.REACT_APP_API_URL}/login`,
      {
        email,
        password,
      },
    )

    return res
  } catch (error) {
    return error
  }
}

export const useLogin = () => {
  const { setUser, setToken } = useUserStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  async function submit(values) {
    setLoading(true)
    const res = await Login(values)
    setLoading(false)

    if (res && res.data && res.data.status === 200 && res.data.error !== true) {
      setUser(res.data.email)
      setToken(res.data.token)
      console.log(res.data.token)
      setError(null)
      setMessage('Login Exitoso')
      setTimeout(() => {
        setError(null)
        setMessage(null)
      }, 2000)
    }
    if (res && res.data && res.data.status !== 200 && res.data.error === true) {
      console.log(res)
      setError(true)
      setMessage(res.data.msg)
      setTimeout(() => {
        setError(null)
        setMessage(null)
      }, 2000)
    }

    if (res.message === 'Network Error') {
      setError(true)
      setMessage('El Servidor No Responde')
      setUser('')
      setTimeout(() => {
        setError(null)
        setMessage(null)
      }, 2000)
    }
  }

  return {
    loading,
    error,
    message,
    submit,
  }
}
