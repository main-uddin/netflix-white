import { ACTIVE__PAGE } from './activePageAction'

const pageRdeducer = (state = { activePage: 'home' }, action) => {
  switch (action.type) {
    case ACTIVE__PAGE:
      return {
        ...state,
        activePage: action.payload
      }
    default:
      return state
  }
}
export default pageRdeducer
