import { useDispatch, useSelector } from 'react-redux'
import { onSetMessage } from '../slices'

export const useMessageStore = () => {
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const setMessage = (msg) => {
    dispatch(onSetMessage(msg))
  }

  return {
    //* Propiedades
    message,
    //* Métodos
    setMessage
  }
}
