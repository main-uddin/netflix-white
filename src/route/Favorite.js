import Navigation from '../components/nav/Navigation'
import Footer from '../components/footer/Footer'
import FavoriteContainer from '../components/favorites'

const Favorite = props => {
  return (
    <div>
      <Navigation />
      <div className='common-route-content'>
        <FavoriteContainer />
        <Footer />
      </div>
    </div>
  )
}

export default Favorite
