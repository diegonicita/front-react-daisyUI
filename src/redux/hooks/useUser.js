import { useDispatch, useSelector } from 'react-redux'
import { onSetToken, onSetUser } from '../slices'

export const useUserStore = () => {
  const { user, token } = useSelector((state) => state.user)  
  const dispatch = useDispatch()

  const setUser = (data) => {
    dispatch(onSetUser(data))
  }
  const setToken = (data) => {
    dispatch(onSetToken(data))
  }

  return {
    //* Propiedades
    user,
    token,
    //* Métodos
    setUser,
    setToken,
  }
}
