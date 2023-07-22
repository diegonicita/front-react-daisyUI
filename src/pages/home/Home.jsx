import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={logo}
            className="max-w-sm rounded-lg"
            alt="Alcance Tech Logo"
          />
          <div>
            <h1 className="text-5xl font-bold">Alcance Tech!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('root/login')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
