import { searchMovies, basedOnSearch } from '../../utls'

export const SET__SEARCH__DATA = 'SET__SEARCH__DATA'
export const SET__BASED__SEARCH__DATA = 'SET__BASED__SEARCH__DATA'

export const searchAction = data => dispatch => {
  searchMovies(data).then(movie => {
    dispatch({
      type: SET__SEARCH__DATA,
      payload: movie
    })
  })
}

export const searchBasedAction = data => dispatch => {
  basedOnSearch(data).then(movie =>
    dispatch({
      type: SET__BASED__SEARCH__DATA,
      payload: movie?.Search
    })
  )
}
