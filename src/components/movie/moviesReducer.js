import { SET__MOVIES } from './moviesAction'

const moviesReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case SET__MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    default:
      return state
  }
}
export default moviesReducer
