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
    <div className="login-container">
      <div>
        <Header />
        <section className="login-main-section">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="title">Sign Up</div>
            <div className="input-container">
              <label htmlFor="email">
                <strong>Correo</strong>
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
              {errors.email && touched.email && (
                <div className="error-frontend">{errors.email}</div>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="password">
                <strong>Contraseña</strong>
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
                <div className="error-frontend">{errors.password}</div>
              )}
            </div>
            <div className="button-container">
              <input type="submit" value="Enviar" />
            </div>
            {stateForm.error && (
              <p className="error-backend"> Credenciales invalidas</p>
            )}
            <br />
            <p>
              ¿Ya tienes una cuenta?<span> </span>
              <Link to="/login">Logueate</Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}