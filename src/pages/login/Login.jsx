import React, { useState } from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik'
import styled from 'styled-components'

export default function Login() {
  const initialValues = {
    email: '',
    password: '',
  }

  const [stateForm, setStateForm] = useState({
    loading: false,
    backError: null,
    backMessage: null,
  })
  const { user, setUser, setToken } = useUserStore()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Debes ingresar un email valido')
      .max(255)
      .required('El campo no debe estar vacio'),
    password: yup.string().required('El campo no debe estar vacio'),
  })
  // .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)

  const onSubmit = async (e) => {
    setStateForm({ loading: true, backError: null })
    const { email, password } = values

    try {
      const res = await axios.post(
        `http://${process.env.REACT_APP_API_URL}/login`,
        {
          email,
          password,
        },
      )
      setStateForm({ loading: false, backError: null })
      if (res.data.status === 200 && res.data.error !== true) {
        // console.log(res)
        setUser(email)
        console.log(email)
        setToken(res.data.token)
        console.log(res.data.token)
        setStateForm((p) => {
          return { ...p, backError: null, backMessage: 'Login Exitoso' }
        })
        setTimeout(() => {
          setStateForm((p) => {
            return { ...p, backError: null, backMessage: null }
          })
        }, 2000)
      }
      if (res.data.status !== 200 && res.data.error === true) {
        console.log(res)
        setStateForm((p) => {
          return { ...p, backError: true, backMessage: res.data.msg }
        })
        setTimeout(() => {
          setStateForm((p) => {
            return { ...p, backError: null, backMessage: null }
          })
        }, 2000)
      }
    } catch (e) {
      console.log(e)
      setStateForm({
        loading: false,
        backError: true,
        backMessage: 'El Servidor No Responde',
      })
      setUser('')
      setTimeout(() => {
        setStateForm((p) => {
          return { ...p, backError: null, backMessage: null }
        })
      }, 2000)
    }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <ErrorBack>{stateForm.backMessage}</ErrorBack>
            <LinkContainer>
              <Link to="/root/product">(Test Product)</Link>
              <Link to="/root/products">(Test Error 404)</Link>
            </LinkContainer>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
              </div>
              {errors.email && touched.email && (
                <ErrorFront>{errors.email}</ErrorFront>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input input-bordered"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.password && touched.password && (
                  <ErrorFront>{errors.password}</ErrorFront>
                )}
              </div>
              <LinkContainer>
                <div>Don´t you have an account ?</div>
                <Link to="/root/register">Sign Up</Link>
              </LinkContainer>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const ErrorFront = styled.div({
  color: 'rgb(255, 0, 0)',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
})

const ErrorBack = styled.div({
  color: 'rgb(255, 0, 0)',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: '1rem',
})

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: black;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`
