import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

function Root() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  )
}

export default Root
