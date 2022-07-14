import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'

export const Navbar = () => {
  const { logout } = useAppDispatch()
  const handleLogout = () => {
    logout()
  }
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/shopping_cart'>Shopping Cart</NavLink>
        </li>
        <li>
          <NavLink to='/history'>History</NavLink>
        </li>
      </ul>
      <div className='logout' onClick={handleLogout}>
        Logout
      </div>
    </nav>
  )
}
