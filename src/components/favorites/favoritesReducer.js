import { SET__FAVORITE } from './favoritesAction'

const favoriteReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case SET__FAVORITE:
      return {
        ...state,
        favorites: [
          ...!state.favorites.some(s => s.imdbID === action.payload.imdbID)
            ? [...state.favorites, { ...action.payload, isActive: true }]
            : state.favorites.filter(f => f.imdbID !== action.payload.imdbID)
        ]
      }
    default:
      return state
  }
}
export default favoriteReducer
