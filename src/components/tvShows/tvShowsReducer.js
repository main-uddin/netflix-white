import { SET__TV__SHOWS } from './tvShowsAction'

const tvShowsReducer = (state = { tvShows: [] }, action) => {
  switch (action.type) {
    case SET__TV__SHOWS:
      return {
        ...state,
        tvShows: action.payload
      }
    default:
      return state
  }
}
export default tvShowsReducer
