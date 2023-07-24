import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../redux/hooks/useUser'
import logo from '../../assets/logo-spider.png'

function Home() {
  const navigate = useNavigate()
  const { user, token } = useUserStore()

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg" alt="Webapp Logo" />
          <div>
            <h1 className="text-5xl font-bold">Webapp FrontEnd</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="join join-vertical lg:join-horizontal">
              {!user && (
                <>
                  <button
                    className="btn join-item"
                    onClick={() => navigate('root/login')}
                  >
                    Sign In
                  </button>
                  <button
                    className="btn join-item"
                    onClick={() => navigate('root/register')}
                  >
                    Register
                  </button>
                </>
              )}
              {user && (
                <button
                  className="btn join-item"
                  onClick={() => navigate('root/logout')}
                >
                  Sign Out
                </button>
              )}
              <button
                className="btn join-item"
                onClick={() => navigate('root/products')}
              >
                Test 404
              </button>
              <button
                className="btn join-item"
                onClick={() => navigate('root/product')}
              >
                Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
