import React, { useEffect, useState } from 'react'
import VerticalCard from './uiComponents/VerticalCard'
import { getMoviesByYear } from './utls'
import rightArrow from './images/right-arrow.png'

import './App.css'

const ReleasedYear = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getMoviesByYear('2021').then(data => {
      setMovies([...data?.Search])
    })
  }, [])
  return (
    <div className='released-year__container'>
      <div className='release__heading'>
        <div className='release__heading-text'>RELEASED IN 2021</div>
        <img className='release__heading-icon' src={rightArrow} alt='' />
      </div>

      <div className='movies-card__container'>
        {movies.map((e, i) => (
          <VerticalCard img={e?.Poster} key={i} />
        ))}
      </div>
    </div>
  )
}
export default ReleasedYear
