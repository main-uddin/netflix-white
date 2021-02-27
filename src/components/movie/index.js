import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import HorizontalCard from '../../uiComponents/HorizontalCard'

import { getMoviesAction } from './moviesAction'

import './movies.css'
import '../../App.css'

const Movies = props => {
  useEffect(() => props.getMoviesAct(), [])
  return (
    <div className='movies__container'>
      <div className='movies__header--position'>
        <div className='movie-list__header'>Movies</div>
        <div className='movie-list__see-all'>See all</div>
      </div>
      <div className='movies-card__container'>
        {[].concat(props.movies).map((e, idx) => (
          <HorizontalCard data={e} key={idx} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  movies: state.movies.movies
})

const mapDispatchToProps = {
  getMoviesAct: getMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
