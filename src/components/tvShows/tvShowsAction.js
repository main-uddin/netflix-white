import { getMovies } from '../../utls'

export const SET__TV__SHOWS = 'SET__TV__SHOWS'

export const getTvShowsAction = () => dispatch => {
  getMovies('series').then(data => {
    dispatch({
      type: SET__TV__SHOWS,
      payload: data?.Search
    })
  })
}
