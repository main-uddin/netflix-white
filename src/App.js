import Home from './route/Home'
import Movie from './route/Movie'
import TvShows from './route/TvShow'
import NewReleased from './route/NewReleased'
import Favorite from './route/Favorite'
import Search from './route/Search'
import Login from './route/Login'

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/' component={Login} />
          <Route path='/movies' component={Movie} />
          <Route path='/tv-shows' component={TvShows} />
          <Route path='/new-released' component={NewReleased} />
          <Route path='/favorite' component={Favorite} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
