import { useDispatch, useSelector } from 'react-redux'
import { onSetUser } from '../slices'

export const useUserStore = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const setUser = (data) => {
    dispatch(onSetUser(data))
  }

  return {
    //* Propiedades
    user,
    //* Métodos
    setUser
  }
}
