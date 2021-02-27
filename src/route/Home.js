import Navigation from '../components/nav/Navigation'
import Banner from '../Banner'
import Footer from '../components/footer/Footer'
import Movies from '../components/movie'
import TvShows from '../components/tvShows'
import NewReleased from '../components/newReleased'
import ReleasedYear from '../ReleasedYear'
import '../App.css'
const Home = props => {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className='home-content'>
        <Movies />
        <TvShows />
        <ReleasedYear />
        <NewReleased />
        <Footer />
      </div>
    </div>
  )
}

export default Home
