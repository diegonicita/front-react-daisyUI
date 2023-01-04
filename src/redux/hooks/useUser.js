import { useDispatch, useSelector } from 'react-redux'
import { onSetUser, onSetToken } from '../slices'

export const useUserStore = () => {
  const { user } = useSelector((state) => state.user)
  const { token } = useSelector((state) => state.user)
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
