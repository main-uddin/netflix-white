import { connect } from 'react-redux'
import cross from '../../images/cross.png'
import './Modal.css'
import { isOpenModalAction } from './modalAction'

import star from '../../images/Star.png'
import starHalf from '../../images/Starhalf.png'

const Modal = props => {
  const hideModal = () => {
    props.isMouseOpenAct(false)
  }

  return (
    <>
      {props.isOpenModal && (
        <div className='modal-container'>
          <div className='modal-close__icon'>
            <img src={cross} alt='' onClick={hideModal} />
          </div>
          <div className='modal-content-root'>
            <div className='modal-content__left'>
              <img className='modal__img' src={props.data?.Poster} alt='' />
              <div className='user-rating__container'>
                <span className='user-rating__text'>User Rating: </span>
                <span className='star-icon__container'>
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={starHalf} alt='' />
                </span>
              </div>
              <div className='meta-rating__container'>
                <span className='meta-rating__text'>Meta Rating:</span>
                <span className='star-icon__container'>
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={starHalf} alt='' />
                </span>
              </div>
            </div>

            <div className='modal-content__right'>
              <div className='movie-title--style'>{props.data?.Title}</div>
              <div className='movie-details__txt--style'>
                {props.data?.Plot.slice(0, 90) + '...'}
              </div>
              <div className='movie-details__txt--style'>
                <span>Directed By: </span> <span>{props.data?.Director}</span>{' '}
              </div>
              <div className='movie-details__txt--style'>
                <span>Cast: </span> <span>{props.data?.Actors}</span>{' '}
              </div>
              <div className='movie-details__txt--style'>
                <span>Writer: </span>{' '}
                <span>{props.data?.Writer.slice(0, 90) + '...'}</span>{' '}
              </div>
              <div className='movie-details__txt--style'>
                <span>Language: </span> <span>{props.data?.Language}</span>{' '}
              </div>
              <div className='movie-details__txt--style'>
                <span>Release Date: </span> <span>{props.data?.Released}</span>{' '}
              </div>
              <div className='movie-details__txt--style'>
                <span>Country: </span> <span>{props.data?.Country}</span>{' '}
              </div>

              <div className='movie-aditional-information'>
                <span className='movie-run-time'>{props.data?.Runtime}</span>{' '}
                <span className='movie-genre'>
                  {props.data?.Genre.split(',').filter(
                    (e, i) => i < 2 && <span>{e}</span>
                  )}
                  <span className='movie-genre'> +5 more</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  isOpenModal: state.modal.isOpenModal,
  data: state.modal.modal
})

const mapDispatchToProps = {
  isMouseOpenAct: isOpenModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
