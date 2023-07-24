import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Product from '../pages/Product/Product'
import Error404 from '../pages/Error404/Error404'
import { useUserStore } from '../redux/hooks/useUser'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

export const AppRoutes = () => {
  const { user, token } = useUserStore()

  console.log(user)

  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/root" element={<Root />}>
          <Route path="/root/" element={<Error404 />} />
          <Route path="/root/*" element={<Error404 />} />
          {user && <Route path="product" element={<Product />} />}
          {user === null && <Route path="login" element={<Login />} />}
          {user === null && <Route path="register" element={<Register />} />}
        </Route>
      </>,
    ),
  )
}
