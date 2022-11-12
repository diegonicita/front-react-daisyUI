import React, { useState } from 'react'
import axios from 'axios'
import { useUserStore } from '../../redux/hooks/useUser'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './Login.css'

export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  }

  const [stateForm, setStateForm] = useState({ loading: false, error: false })
  const { user, setUser } = useUserStore()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Debes ingresar un email valido')
      .max(255)
      .required('El campo no debe estar vacio'),
    password: yup.string().required('El campo no debe estar vacio')
  })
  // .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)

  const onSubmit = (e) => {
    setStateForm({ loading: true, error: false })
    const { email, password } = values
    axios
      .post(`http://${process.env.REACT_APP_API_URL}/users/login`, {
        email,
        password
      })
      .then((res) => {
        setStateForm({ loading: false, error: false })
        if (res.status === 200 && res.data.error !== true) {
          console.log(res)
          setUser(email)
        } else {
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
        setUser('')
      })
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik

  return (
    <div className="app">
      <div>
        <div className="web-preview-header">
          <div className="color-stripe top-stripe">
            <div
              className="color-stripe-bar"
              style={{ backgroundColor: 'rgb(0, 168, 152)' }}
            ></div>
            <div
              className="color-stripe-bar"
              style={{ backgroundColor: 'rgb(255, 192, 14)' }}
            ></div>
            <div
              className="color-stripe-bar"
              style={{ backgroundColor: 'rgb(0, 168, 152)' }}
            ></div>
            <div className="web-preview-header-logo"></div>
            <div className="web-preview-header-spacer"></div>
          </div>
        </div>
        <section style={{width: "100vw"}}>
          <h1>Bienvenido</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Correo
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
            </label>
            {errors.email && touched.email && <div>{errors.email}</div>}
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
              />
            </label>
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
            <button type="submit">
              {stateForm.loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
            {stateForm.error && <p> Credenciales invalidas</p>}
          </form>
          <p>
            ¿Aún no tienes una cuenta?<span> </span>
            <a href="/register">Crea una</a>
          </p>
        </section>
      </div>
    </div>
  )
}
