import { combineReducers } from 'redux'

import favoriteReducer from './components/favorites/favoritesReducer'
import loginReducer from './components/login/loginReducer'
import modalReducer from './components/modal/modalReducer'
import moviesReducer from './components/movie/moviesReducer'
import pageRdeducer from './components/nav/activePageReducer'
import newReleasedReducer from './components/newReleased/newRealeasedReducer'
import searchReducer from './components/search/searchReducer'
import tvShowsReducer from './components/tvShows/tvShowsReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  newReleased: newReleasedReducer,
  page: pageRdeducer,
  favorite: favoriteReducer,
  modal: modalReducer,
  search: searchReducer,
  login: loginReducer
})
