import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { valid } from '../utils/valid'

const Login = () => {
  const [lgValue, setValue] = useState({
    email: '',
    password: '',
  })
  const [inputErrs, setInputErrs] = useState([])
  const [isShowed, setIsShowed] = useState(false)

  const { login } = useAppDispatch()

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setValue({ ...lgValue, [name]: value })
  }

  const handleShowPassword = () => {
    setIsShowed(!isShowed)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { errs, errsLength } = valid.login(lgValue)

    if (errsLength > 0) {
      setInputErrs(errs)
    } else {
      login(lgValue)
    }
  }

  return (
    <div className='auth'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email</span>
          <input
            type='text'
            name='email'
            value={lgValue.email}
            onChange={handleChangeInput}
          />
        </label>

        <label className='password_label'>
          <span>Password</span>
          <input
            type={isShowed ? 'text' : 'password'}
            name='password'
            value={lgValue.password}
            onChange={handleChangeInput}
          />
          <small onClick={handleShowPassword}>
            {isShowed ? 'Show' : 'Hide'}
          </small>
        </label>

        <span className='redirect'>
          No account?
          <Link to='/register'>Register</Link>
        </span>
        <button type='submit'>Login</button>
        {inputErrs.length > 0 && (
          <div className='errors'>
            {inputErrs.map((err) => (
              <div key={err}>* {err}</div>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}

export default Login
