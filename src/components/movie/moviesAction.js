import { getMovies, getMoviesByYear } from '../../utls'

export const SET__MOVIES = 'SET__MOVIES'

export const getMoviesAction = () => dispatch => {
  getMovies('movie')
    .then(data => {
      dispatch({
        type: SET__MOVIES,
        payload: data?.Search
      })
    })
}
