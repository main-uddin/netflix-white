import Navigation from '../components/nav/Navigation'
import Footer from '../components/footer/Footer'
import SearchContainer from '../components/search'

const Favorite = props => {
  return (
    <div>
      <Navigation />
      <div className='common-route-content'>
        <SearchContainer />
        <Footer />
      </div>
    </div>
  )
}

export default Favorite
