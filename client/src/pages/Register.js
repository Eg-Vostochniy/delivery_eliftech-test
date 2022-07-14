import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { valid } from '../utils/valid'

const Register = () => {
  const [lgValue, setValue] = useState({
    username: '',
    email: '',
    password: '',
    cf_password: '',
  })
  const [inputErrs, setInputErrs] = useState([])

  const [isShowed, setIsShowed] = useState(false)

  const { register } = useAppDispatch()

  const handleChangeInput = (e) => {
    const { value, name } = e.target
    if (name === 'username')
      setValue({ ...lgValue, [name]: value.toLowerCase().replace(/ /g, '') })
    else setValue({ ...lgValue, [name]: value })
  }

  const handleShowPassword = () => {
    setIsShowed(!isShowed)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { errs, errsLength } = valid.register(lgValue)

    if (errsLength > 0) {
      setInputErrs(errs)
    } else {
      register(lgValue)
    }
  }

  return (
    <div className='auth'>
      <form onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <label>
          <span>User name</span>
          <input
            type='text'
            name='username'
            value={lgValue.username}
            onChange={handleChangeInput}
          />
        </label>

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
            {isShowed ? 'Hide' : 'Show'}
          </small>
        </label>

        <label>
          <span>Repeat password</span>
          <input
            type={isShowed ? 'text' : 'password'}
            name='cf_password'
            value={lgValue.cf_password}
            onChange={handleChangeInput}
          />
        </label>

        <span className='redirect'>
          Have an account?
          <Link to='/login'>Login</Link>
        </span>
        <button type='submit'>Register</button>
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

export default Register
