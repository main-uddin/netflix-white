import { SET__USER } from './loginAction'

const loginReducer = (state = { userName: 'Netflix' }, action) => {
  switch (action.type) {
    case SET__USER:
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state
  }
}
export default loginReducer
