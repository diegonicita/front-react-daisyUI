import { useState } from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import { Login } from './api'
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { setUser, setToken } = useUserStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate();

  async function submit(values) {
    setLoading(true)
    const res = await Login(values)
    setLoading(false)

    if (res && res.data && res.data.status === 200 && res.data.error !== true) {
      setError(null)
      setMessage('Login Exitoso')
      setTimeout(() => {
        setError(null)
        setMessage(null)
        setUser(res.data.email)
        setToken(res.data.token)        
        navigate('/root/product');
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
