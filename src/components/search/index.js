import React from 'react'
import { connect } from 'react-redux'
import Modal from '../modal'
import { isOpenModalAction, setModalAction } from '../modal/modalAction'
import HorizontalCard from '../../uiComponents/HorizontalCard'
import './Search.css'
import '../../App.css'

const SearchContainer = props => {
  const mouseEnter = () => {
    props.isMouseOpenAct(true)
    props.modalDataAct(props.search)
  }

  return (
    <div>
      {props.search?.Error && <div>{props.search?.Error}</div>}

      {props.search?.Poster && (
        <div className='search__img' onMouseEnter={mouseEnter}>
          <img src={props.search?.Poster} alt='' />
        </div>
      )}

      <div className='movies__header--position'>
        <div className='movie-list__header'>Based on your search</div>
      </div>
      {props.basedOnSearch != undefined && (
        <div className='movies-card__container'>
          {[]
            .concat(props?.basedOnSearch)
            // .filter((f, i) => i < 6)
            .map((e, idx) => (
              <HorizontalCard data={e} key={idx} />
            ))}
        </div>
      )}
      <Modal />
    </div>
  )
}

const mapStateToProps = state => ({
  search: state.search.search,
  basedOnSearch: state.search.basedOnSearch
})

const mapDispatchToProps = {
  isMouseOpenAct: isOpenModalAction,
  modalDataAct: setModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
