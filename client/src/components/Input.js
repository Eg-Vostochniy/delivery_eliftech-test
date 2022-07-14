import { useState } from 'react'

export const Input = ({ type, name, placeholder, required = true }) => {
  const [input, setInput] = useState('')
  const handleChange = (e) => setInput(e.target.value)

  return (
    <input
      className='custom__input'
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      value={input}
      onChange={handleChange}
    />
  )
}
