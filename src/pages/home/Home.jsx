import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Home() {
  
  const navigate = useNavigate();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img src={logo} width="300" alt="Alcance Tech" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>Alcance Tech</h1>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2>(Home.jsx)</h2>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button style={{ fontWeight: 'bold', margin: '5px', padding: '5px' }}
                onClick={ ()=> navigate("root/login")}>
          Log In
        </button>
      </div>
    </>
  )
}

export default Home
