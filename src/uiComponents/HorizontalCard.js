import './customUi.css'
import LoveInactive from '../images/loveInnactive.png'
import loveActive from '../images/loveActive.png'
import { connect } from 'react-redux'
import { setFavoriteAction } from '../components/favorites/favoritesAction'

const HorizontalCard = props => {
  const makeFavorite = () => {
    props.favoriteAct(props?.data)
  }
  return (
    <div
      className='horizontal-card__container'
      style={{
        backgroundImage: `url(${props?.data?.Poster})`,
        backgroundSize: '100%'
      }}
    >
      <img
        className='horizontal__favourite-icon--positon'
        src={props?.data?.isActive ? loveActive : LoveInactive}
        alt=''
        onClick={makeFavorite}
      />
    </div>
  )
}
const mapDispatchToProps = {
  favoriteAct: setFavoriteAction
}

export default connect(null, mapDispatchToProps)(HorizontalCard)
