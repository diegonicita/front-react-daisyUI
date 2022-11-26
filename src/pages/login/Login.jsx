import React, { useState } from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { Canvas, extend } from '@react-three/fiber'
import { Mark } from '../../components/Mark'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Footer } from '../../components/Footer'
import * as yup from 'yup'
import { onSetToken } from '../../redux/slices'
import axios from 'axios'
import { useFormik } from 'formik'
import styled from 'styled-components'

extend({ OrbitControls })

export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  }

  const [stateForm, setStateForm] = useState({ loading: false, error: false })
  const { user, setUser, setToken } = useUserStore()

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
          setToken(res.data.token)
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
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Log In</Title>
        <InputContainer>
          <Label htmlFor="email">
            Correo
            <Input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
            />
          </Label>
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </InputContainer>
        <div className="input-container">
          <Label htmlFor="password">
            Contraseña
            <Input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="current-password"
            />
          </Label>
          {errors.password && touched.password && (
            <div className="error-frontend">{errors.password}</div>
          )}
        </div>
        <ButtonContainer>
          <Button type="submit" value="Enviar" />
        </ButtonContainer>
        {stateForm.error && <p> Credenciales invalidas</p>}
        <LinkContainer>
          <div>¿Aún no tienes una cuenta?</div>
          <Link to="/root/register">Crea una cuenta</Link>
        </LinkContainer>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`
const Title = styled.div`
  font-size: 25px;  
  color: #00a898;
  text-align: center;
  font-weight: bold;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px;
`

const Label = styled.label`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.2rem;
`
const Input = styled.input`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  font-weight: 100;
  font-size: 1.2rem;
  padding: 1rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.input`
  margin-top: 10px;
  cursor: pointer;
  font-size: 15px;
  background: #00a898;
  border: 1px solid #00a898;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`
