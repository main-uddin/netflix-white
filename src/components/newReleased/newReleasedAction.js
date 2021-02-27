import { getMoviesByYear } from '../../utls'

export const SET__NEW__RELEASED = 'SET__NEW__RELEASED'

export const getNewReleasedAction = () => dispatch => {
  getMoviesByYear('2020')
    .then(data => {
      dispatch({
        type: SET__NEW__RELEASED,
        payload: data?.Search
      })
    })
}
