import React, {useState} from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import './Login.css'
import { Canvas, extend } from '@react-three/fiber'
import { Mark } from '../../components/Mark'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Footer } from '../../components/Footer'
import * as yup from 'yup';
import { onSetToken } from '../../redux/slices'
import axios from 'axios';
import {useFormik} from 'formik'

extend({ OrbitControls });

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
    <>
    <div className="login-container">
      <div>
        <div className="web-preview-header">
          <div className="color-stripe top-stripe">
            <div
              className="color-stripe-bar"
              style={{ backgroundColor: 'rgb(255, 192, 14)' }}
              ></div>
            <div
              className="color-stripe-bar"
              style={{ backgroundColor: 'rgb(238, 77, 48)' }}
            ></div>
            <div
              className="color-stripe-bar"
              style={{ backgroundColor: 'rgb(0, 168, 152)' }}
            ></div>
          </div>
          <div className="web-preview-header-logo"></div>
          <div className="web-preview-header-spacer"></div>
        </div>
        <section className="main-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            alignItems: 'center'
          }}
        >
          <br />
          <br />
          <br />
          <form onSubmit={handleSubmit} className="login-form">
            <div className="title">Log In</div>
            <div className="input-container">
              <label
                htmlFor="email"
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexDirection: 'column'
                }}
              >
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
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="input-container">
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
                <div className="error-frontend">{errors.password}</div>
              )}
            </div>
            <div className="button-container">
              <input type="submit" value='Enviar'/>              
            </div>
            {stateForm.error && <p> Credenciales invalidas</p>}
            <br />
            <p>
              ¿Aún no tienes una cuenta?<span> </span>
              <a href="/register">Crea una cuenta</a>
            </p>
          </form>
        </section>
        <section className="main-section">
          <div className="product-wrapper">
            <div className="left-side">
              <div className="canvas-container">
                <Canvas
                  style={{
                    border: '1px solid rgba(0,0,0,0)',
                    backgroundColor: '#FFFFF',
                    borderRadius: '10px'
                  }}
                >
                  <ambientLight intensity="1" color="#444444" />
                  <spotLight
                    color="gray"
                    intensity={1}
                    position={[3, 3, 3]}
                    angle={0.7}
                    penumbra={1}
                    castShadow
                  />
                  <spotLight
                    color="gray"
                    intensity={1}
                    position={[-15, 12, 2]}
                    angle={0.5}
                    penumbra={1}
                    castShadow
                  />
                  <spotLight
                    color="grey"
                    intensity={1}
                    position={[5, 12, 0]}
                    angle={0.5}
                    penumbra={1}
                    castShadow
                  />
                  <Mark />
                </Canvas>
              </div>
            </div>
            <div className="right-side">
              <div className="product-title"> Amy Kilin Brown </div>
              <div className="product-price"> $240.00 </div>
              <div className="product-description-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                repudiandae veritatis neque quibusdam sint sunt nam at tenetur
                eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
                deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
                voluptatem provident quia libero. Natus dolore provident
              </div>
              <br />
              <div className="product-description-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                repudiandae veritatis neque quibusdam sint sunt nam at tenetur
                eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
                deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
                voluptatem provident quia libero. Natus dolore provident ad sunt
                tempore quaerat fugit reiciendis doloribus quae.{' '}
              </div>
            </div>
          </div>
        </section>
        <section className="description-section">
        <div className="description-section-title">Description</div>
          <div className="description-section-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            repudiandae veritatis neque quibusdam sint sunt nam at tenetur
            eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
            deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
            voluptatem provident quia libero. Natus dolore provident ad sunt
            tempore quaerat fugit reiciendis doloribus quae.{' '}
          </div>
        </section>
        <Footer />
      </div>
    </div>
    
    </>
  )
}
