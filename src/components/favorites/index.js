import React from 'react'
import { connect } from 'react-redux'
import HorizontalCard from '../../uiComponents/HorizontalCard'
import '../../App.css'
import NewReleased from '../newReleased/'

const Favorites = props => {
  return (
    <div>
      <div className='movies__header--position'>
        <div className='movie-list__header'>Favorites</div>
      </div>
      <div className='movies-card__container'>
        {[].concat(props.favorites).map((e, i) => (
          <HorizontalCard data={e} key={i} />
        ))}
      </div>
      <NewReleased />
    </div>
  )
}

const mapStateToProps = state => ({
  favorites: state.favorite.favorites
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
