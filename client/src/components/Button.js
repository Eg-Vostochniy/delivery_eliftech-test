export const Button = ({ children, handleClick, type }) => {
  return (
    <button type={type} onClick={handleClick} className='btn-primary'>
      {children}
    </button>
  )
}
