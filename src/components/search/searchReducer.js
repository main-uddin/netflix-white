import { SET__SEARCH__DATA, SET__BASED__SEARCH__DATA } from './searchAction'

const searchReducer = (state = { search: {}, basedOnSearch: [] }, action) => {
  switch (action.type) {
    case SET__SEARCH__DATA:
      return {
        ...state,
        search: action.payload
      }
    case SET__BASED__SEARCH__DATA:
      return {
        ...state,
        basedOnSearch: action.payload
      }
    default:
      return state
  }
}
export default searchReducer
