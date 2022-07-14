import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ShoppingCart } from './pages/ShoppingCart'
import { Shop } from './pages/Shop'
import './styles/index.css'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAuth } from './hooks/useAuth'
import Login from './pages/Login'
import Register from './pages/Register'
import { History } from './pages/History'

export const App = () => {
  const { getShops, getShoppingCart, getOrders } = useAppDispatch()
  const shoppingCart = useSelector((state) => state?.shoppingCart?.cart)

  const isAuth = useAuth()
  const { pathname } = useLocation()

  const PrivateRoute = (props) => {
    return isAuth ? props.children : <Navigate to='/login' />
  }
  const PublicRoute = (props) => {
    if (pathname === '/login' && isAuth) return <Navigate to='/' />
    return !isAuth ? props.children : <Navigate to='/' />
  }

  useEffect(() => {
    if (isAuth) {
      getShoppingCart()
      getShops()
      getOrders(isAuth)
    }
  }, [isAuth])

  const { mcDonny, cfk, bullet, freshCircle, yakit } = useSelector(
    (state) => state?.shops?.shops
  )
  return (
    <div className='app'>
      <div className='container'>
        {isAuth ? <Navbar /> : ''}
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Shop />
              </PrivateRoute>
            }
          />
          <Route
            path='/shopping_cart'
            element={
              <PrivateRoute>
                <ShoppingCart shoppingCart={shoppingCart} />
              </PrivateRoute>
            }
          />
          <Route
            path='/history'
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path='/shop/mc_donny'
            element={
              <PrivateRoute>
                <Shop products={mcDonny} />
              </PrivateRoute>
            }
          />
          <Route
            path='/shop/cfk'
            element={
              <PrivateRoute>
                <Shop products={cfk} />
              </PrivateRoute>
            }
          />
          <Route
            path='/shop/bullet'
            element={
              <PrivateRoute>
                <Shop products={bullet} />
              </PrivateRoute>
            }
          />
          <Route
            path='/shop/fresh_circle'
            element={
              <PrivateRoute>
                <Shop products={freshCircle} />
              </PrivateRoute>
            }
          />
          <Route
            path='/shop/yakit'
            element={
              <PrivateRoute>
                <Shop products={yakit} />
              </PrivateRoute>
            }
          />
          <Route
            path='/register'
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </div>
  )
}
