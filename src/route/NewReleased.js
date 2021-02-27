import Navigation from '../components/nav/Navigation'
import Footer from '../components/footer/Footer'
import New from '../components/newReleased'

const NewReleased = props => {
  return (
    <div>
      <Navigation />
      <div className='common-route-content'>
        <New />
        <Footer />
      </div>
    </div>
  )
}

export default NewReleased
