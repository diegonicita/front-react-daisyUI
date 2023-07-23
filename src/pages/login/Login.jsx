import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useLogin } from './useLogin'
import { initialValues, validationSchema } from './loginValidation'

export default function Login() {
  const { loading, error, message, submit } = useLogin()

  const onSubmit = async (e) => {
    submit(e)
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {loading && (
           <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 opacity-60 z-10 flex items-center justify-center">
           <span className="loading loading-spinner loading-lg z-20"></span>
         </div>
          )}
          {error === null && message?.length > 0 && (
            <div className="absolute top-5 left-5 alert alert-success w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Login Exitoso!</span>
            </div>
          )}
          {error !== null && message?.length > 0 && (
            <div className="absolute top-5 left-5 alert alert-error w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{message}</span>
            </div>
          )}
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
              <div className="text-red-700 font-bold">{errors.email}</div>
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
            </div>
            {errors.password && touched.password && (
              <div className="text-red-700 font-bold">{errors.password}</div>
            )}
            <LinkContainer>
              <div>Don´t you have an account ?</div>
              <Link to="/root/register">Sign Up</Link>
            </LinkContainer>

            <div className="form-control mt-6">
              <button type="submit" value="Submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

const ErrorFront = styled.div({
  color: 'rgb(255, 0, 0)',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
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
