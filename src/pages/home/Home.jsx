import React from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import Header from '../../components/Header'
import './Home.css'
import useAxios from '../../hooks/useAxios'
import { onSetToken } from '../../redux/slices'

export default function Home() {

  const { user, setUser, setToken, token } = useUserStore()

  const { response, error, loading } = 
  useAxios({
    url: `http://${process.env.REACT_APP_API_URL}/users/list`, 
    method: 'GET', 
    body: null,  
    headers: {
      authorization: `Bearer ${token}`}
  })   

  // if (response?.status === 403) 
  // {
  //   setToken(null)
  //   setUser(null)  
  // }


  const logout = () => {
    setUser(null);
  }

  return (
    <div className="login-container">
      <div>
        <Header />
        <section className="login-main-section">
            <p style={{fontSize: '2rem', marginTop: '2rem', color: 'white'}}> Bienvenido {user} </p>
            <div style={{fontSize: '1rem', margin: '2rem', color: 'white', width: '200px', overflowWrap: 'break-word'}}> {token} </div>
        <br />
        <p> Lista de Usuarios </p>
        <br />
        {response !== undefined && Array.isArray(response) &&
            response.map(e => <div key={e.id}> {e.email} </div>)
          }
        <button className="button-logout" onClick={ () => logout()}>Log Out</button>
        </section>
      </div>
    </div>
  )
}