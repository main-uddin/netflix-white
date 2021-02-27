const api_root = 'http://www.omdbapi.com'

export const getMovies = str => {
  return window
    .fetch(
      `${api_root}/?apikey=${process.env.REACT_APP_API_KEY}&s=${str}&page=1`
    )
    .then(res => res.json())
    .then(data => data)
}

export const getMoviesByYear = str => {
  return window
    .fetch(
      `${api_root}/?apikey=${process.env.REACT_APP_API_KEY}&s=movie&y=${str}`
    )
    .then(res => res.json())
    .then(data => data)
    .catch(() => [])
}

export const searchMovies = str => {
  return window
    .fetch(
      `${api_root}/?apikey=${process.env.REACT_APP_API_KEY}&t=${str
        .split(' ')
        .join('+')}`
    )
    .then(res => res.json())
    .then(data => data)
    .catch(err => err)
}

export const basedOnSearch = str => {
  return window
    .fetch(
      `${api_root}/?apikey=${process.env.REACT_APP_API_KEY}&s=${str
        .split(' ')
        .join('+')}`
    )
    .then(res => res.json())
    .then(data => data)
}

// http://www.omdbapi.com/?t=abc&y=2020
