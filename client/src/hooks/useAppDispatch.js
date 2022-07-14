import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allActions } from '../redux/allActions'

export const useAppDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}
