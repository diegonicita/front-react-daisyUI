import axios from 'axios'

export const Login = async ({ email, password }) => {
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