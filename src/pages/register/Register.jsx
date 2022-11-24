import React, { useState } from 'react'
import axios from 'axios'
import { useUserStore } from '../../redux/hooks/useUser'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import '../login/Login.css'

export default function Register() {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }
  const [stateForm, setStateForm] = useState({ loading: false, error: false })
  // eslint-disable-next-line no-unused-vars
  const { user, setUser, setToken } = useUserStore()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Debes ingresar un email valido')
      .max(255)
      .required('El campo no debe estar vacio'),
    firstName: yup
      .string()
      .min(
        3,
        ({ min }) => `Nombre muy corto. Debe tener al menos ${min} caracteres!`
      )
      .required('El campo no debe estar vacio'),
    lastName: yup
      .string()
      .min(
        3,
        ({ min }) =>
          `Apellido muy corto. Debe tener al menos ${min} caracteres!`
      )
      .required('El campo no debe estar vacio'),
    password: yup
      .string()
      .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
      .required('El campo no debe estar vacio'),
    confirmPassword: yup
      .string()
      .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
      .required('El campo no debe estar vacio')
      .oneOf([yup.ref('password'), null], 'Tus passwords no coinciden')
  })

  const onSubmit = (e) => {
    setStateForm({ loading: true, error: false })
    const { email, firstName, lastName, password, confirmPassword } = values
    axios
      .post(`http://${process.env.REACT_APP_API_URL}/users/register`, {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
      })
      .then((res) => {
        setStateForm({ loading: false, error: false })
        console.log(res)
        if (res.status === 200 && res.data.error !== true) 
        {setUser(email)
        setToken(res.data.token)        
        }
        else {
          setStateForm((p) => {
            return { ...p, error: true }
          })
          setTimeout(() => {
            setStateForm((p) => {
              return { ...p, error: false }
            })
          }, 2000)
        }
      })
      .catch((error) => {
        setStateForm({ loading: false, error: true })
        console.log(error)
      })
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik

  return (
    <div className="login-container">
      <div>
        <Header />
        <section className="login-main-section">          
            <form className="login-form" onSubmit={handleSubmit}>
            <div className="title">Registrate</div>
            <div className="input-container">
            <label htmlFor="firstName">
              Nombre
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.firstName && touched.firstName && (
              <div className='error-frontend'>{errors.firstName}</div>
            )}
            </div>
            <div className="input-container">
            <label htmlFor="lastName">
              Apellido
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.lastName && touched.lastName && (
              <div className='error-frontend'>{errors.lastName}</div>
            )}
            </div>
            <div className="input-container">
            <label htmlFor="email">
              Correo
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.email && touched.email && <div className='error-frontend'>{errors.email}</div>}
            </div>
            <div className="input-container">
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.password && touched.password && (
              <div className='error-frontend'>{errors.password}</div>
            )}
            </div>
            <div className="input-container">
            <label htmlFor="confirmPassword">
              Confirma la contraseña
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className='error-frontend'>{errors.confirmPassword}</div>
            )}
            </div>
            <div className="button-container">
              <input type="submit" value="Registrarme" />
            </div>                        
          {stateForm.error && (
            <p className="error-backend"> Error en la Registracion </p>
            )}
          <br />
          <br />
            <p>
              ¿Ya tienes una cuenta?<span> </span>
              <Link to="/">¿Que esperas para Loguearte?</Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}
