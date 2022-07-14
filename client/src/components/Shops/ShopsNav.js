import { NavLink } from 'react-router-dom'

export const ShopsNav = () => {
  return (
    <nav className='shops__nav-items'>
      <h3>Shops</h3>
      <ul>
        <NavLink to='/shop/mc_donny'>
          <li className='btn'>Mc Donny</li>
        </NavLink>
        <NavLink to='/shop/cfk'>
          <li className='btn'>CFK</li>
        </NavLink>

        <NavLink to='/shop/bullet'>
          <li className='btn'>Bullet</li>
        </NavLink>

        <NavLink to='/shop/fresh_circle'>
          <li className='btn'>Fresh Circle</li>
        </NavLink>

        <NavLink to='/shop/yakit'>
          <li className='btn'>Yakit</li>
        </NavLink>
      </ul>
    </nav>
  )
}
