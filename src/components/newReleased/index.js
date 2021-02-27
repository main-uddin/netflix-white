import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import HorizontalCard from '../../uiComponents/HorizontalCard'
import { getNewReleasedAction } from './newReleasedAction'

import './NewReleased.css'
import '../../App.css'
const NewReleased = props => {
  useEffect(() => props.getNewReleasedAct(), [])
  return (
    <div className='new-released__container'>
      <div className='movies__header--position'>
        <div className='movie-list__header'>New Released</div>
        <div className='movie-list__see-all'>See all</div>
      </div>
      <div className='movies-card__container'>
        {[].concat(props.newReleased).map((e, idx) => (
          <HorizontalCard data={e} key={idx} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  newReleased: state.newReleased.newReleased
})

const mapDispatchToProps = {
  getNewReleasedAct: getNewReleasedAction
}
export default connect(mapStateToProps, mapDispatchToProps)(NewReleased)
