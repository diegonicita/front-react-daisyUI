import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import { useUserStore } from '../redux/hooks/useUser'

export const AppRoutes = () => {  
  const { user, setUser } = useUserStore()

  return (
    <Routes>
      {user && (
        <>
          <Route path="/" element={<Home />} />         
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
      {user === null && (
        <>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}