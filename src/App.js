import { AppRoutes } from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { Outlet, RouterProvider } from 'react-router-dom';
function App() {
  return (
    <>
      <Provider store={store}>        
            <RouterProvider router={AppRoutes()} />            
            <Outlet />
      </Provider>
    </>
  )
}

export default App
