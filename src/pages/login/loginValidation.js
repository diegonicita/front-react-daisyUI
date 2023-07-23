import * as yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
}
export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Debes ingresar un email valido')
    .max(255)
    .required('El campo no debe estar vacio'),
  password: yup.string().required('El campo no debe estar vacio'),
})
