import Navigation from '../components/nav/Navigation'
import Movies from '../components/movie'
import Footer from '../components/footer/Footer'
import NewReleased from '../components/newReleased'

const Movie = props => {
  return (
    <div>
      <Navigation />
      <div className='common-route-content'>
        <Movies />
        <NewReleased />
        <Footer />
      </div>
    </div>
  )
}

export default Movie
