import { SET__NEW__RELEASED } from './newReleasedAction'

const newReleasedReducer = (state = { newReleased: [] }, action) => {
  switch (action.type) {
    case SET__NEW__RELEASED:
      return {
        ...state,
        newReleased: action.payload
      }
    default:
      return state
  }
}
export default newReleasedReducer
