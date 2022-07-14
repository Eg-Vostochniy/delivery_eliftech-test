import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from './useAppDispatch'

export const useAuth = () => {
  const { token } = useSelector((state) => state.auth)
  const { refreshToken } = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) refreshToken()
    //eslint-disable-next-line
  }, [])

  return token
}
