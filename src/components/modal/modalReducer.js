import { IS__MODAL__OPEN, SET__MODAL__DATA } from './modalAction'

const modalReducer = (state = { isOpenModal: false, modal: {} }, action) => {
  switch (action.type) {
    case IS__MODAL__OPEN:
      return {
        ...state,
        isOpenModal: action.payload
      }
    case SET__MODAL__DATA:
      return {
        ...state,
        modal: action.payload
      }
    default:
      return state
  }
}
export default modalReducer
