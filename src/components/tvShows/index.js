import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import HorizontalCard from '../../uiComponents/HorizontalCard'
import { getTvShowsAction } from './tvShowsAction'

import '../../App.css'
import './TvShows.css'

const TvShows = props => {
  useEffect(() => props.getTvShowAct(), [])
  return (
    <div className='tv-shows__container'>
      <div className='movies__header--position'>
        <div className='movie-list__header'>TV Shows</div>
        <div className='movie-list__see-all'>See all</div>
      </div>
      <div className='movies-card__container'>
        {[].concat(props.tvSeries).map((e, idx) => (
          <HorizontalCard data={e} key={idx} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tvSeries: state.tvShows.tvShows
})

const mapDispatchToProps = {
  getTvShowAct: getTvShowsAction
}
export default connect(mapStateToProps, mapDispatchToProps)(TvShows)
