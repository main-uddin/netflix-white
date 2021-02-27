import Navigation from '../components/nav/Navigation'
import Footer from '../components/footer/Footer'
import TvShow from '../components/tvShows'

const TvShows = props => {
  return (
    <div>
      <Navigation />
      <div className='common-route-content'>
        <TvShow />
        <Footer />
      </div>
    </div>
  )
}

export default TvShows
