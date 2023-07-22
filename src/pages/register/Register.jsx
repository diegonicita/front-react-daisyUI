import React, { useState } from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import { Link } from 'react-router-dom'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik'
import styled from 'styled-components'

extend({ OrbitControls })

export default function Register() {
  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  }

  const [setStateForm] = useState({ loading: false, error: false })
  const {serverMessage } = useState("Credenciales Invalidas")
  const { setUser, setToken } = useUserStore()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid E-mail')
      .max(255)
      .required('This field is required and cannot be empty'),
    password: yup.string().required('This field is required and cannot be empty'), 
    repeatPassword: yup.string().required('This field is required and cannot be empty')
  })
  // .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)

  const onSubmit = async (e) => {
    setStateForm({ loading: true, error: false })
    const { email, password, repeatPassword } = values   
    try { 
    const res = await axios.post(`http://${process.env.REACT_APP_API_URL}/register`, {
        email,
        password,
        repeatPassword
      })    
    
    console.log(res)
    setStateForm({ loading: false, error: false })

    // Si se pudo registrar: status 200 y sin errores //
    if (res.status === 200 && res.data.error !== true) {
          console.log(res)
          setUser(email)
          setToken(res.data.token)
    }

    // si el servidor detecto algun problema //
    if (res.status !== 200 && res.data.error === true)
        {
        console.log(res)        
        setStateForm((p) => {
            return { ...p, error: true }
          })
        setTimeout(() => {
            setStateForm((p) => {
              return { ...p, error: false }
            })
          }, 2000)
        }
      
      } 
      catch(error) {
        console.log("Error al llamar al Server: " + error)
        setStateForm({ loading: false, error: true })
        setUser('')
      }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <InputContainer>
          <Label htmlFor="email">
            Email
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
            <ErrorFront>{errors.email}</ErrorFront>
          )}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="none"
            />
          </Label>
          {errors.password && touched.password && (
            <ErrorFront>{errors.password}</ErrorFront>
          )}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="repeatPassword">
            Repeat Password
            <Input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='none'
            />
          </Label>
          {errors.repeatPassword && touched.repeatPassword && (
            <ErrorFront>{errors.repeatPassword}</ErrorFront>
          )}
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" value="Register" />
        </ButtonContainer>
        {serverMessage && <p> {serverMessage} </p>}
        <LinkContainer>
          <div>Do you you have an account ?</div>
          <Link to="/root/login">Sign In</Link>
        </LinkContainer>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 70vh;
  align-items: center;    
  padding-top: 5rem;
  padding-bottom: 5rem;  
`

const Form = styled.form`
display: flex;
flex: 1;
flex-direction: column;
`

const Title = styled.div`
  font-size: 2.2rem;  
  color: black;
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
  font-size: 1.3rem;
  color: black;
`
const Input = styled.input`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  font-weight: 100;  
  padding: 1rem;
  border-radius: 4px;
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 5px;   
`  
const ErrorFront = styled.div({
    color: 'rgb(255, 0, 0)',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',    
  })

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
  font-size: 1.2rem;
  font-weight: 100;
`

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
