import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (axiosParams) => {
  
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = async (params) => {
    try {
      const res = await axios.request(params)
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    fetchData(axiosParams)
  }, [])

  return { response, error, loading }
}

export default useAxios
