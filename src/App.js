import { AppRoutes } from './routes/AppRoutes'
import { Outlet, RouterProvider } from 'react-router-dom'
function App() {
  return (
    <>
      <RouterProvider router={AppRoutes()} />
      <Outlet />
    </>
  )
}

export default App
