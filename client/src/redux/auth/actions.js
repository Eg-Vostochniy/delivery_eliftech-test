import { authAPI } from '../../utils/services/auth'

export const authActions = {
  auth: (payload) => {
    return { type: 'AUTH', payload }
  },
}

export const authThunks = {
  login: (data) => async (dispatch) => {
    try {
      const res = await authAPI.login(data)
      dispatch(authActions.auth(res.data))

      localStorage.setItem('token', res.data.token)
    } catch (error) {
      console.error(error)
    }
  },
  register: (data) => async (dispatch) => {
    try {
      const res = await authAPI.register(data)
      dispatch(authActions.auth(res.data))

      localStorage.setItem('token', res.data.token)
    } catch (error) {
      console.error(error)
    }
  },
  logout: () => async (dispatch) => {
    try {
      const res = await authAPI.logout()
      dispatch(authActions.auth({}))

      localStorage.removeItem('token')
    } catch (error) {
      console.error(error)
    }
  },
  refreshToken: () => async (dispatch) => {
    try {
      const res = await authAPI.refresh_token()
      dispatch(authActions.auth(res.data))
    } catch (error) {
      console.error(error)
      authThunks.logout()
    }
  },
}
