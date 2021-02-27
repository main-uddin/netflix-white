import React from 'react'
import showTime from '../../images/showtime.png'
import searchImg from '../../images/search.png'
import notification from '../../images/bell-icon.png'
import avatar from '../../images/avatar.png'
import down from '../../images/down.png'

import './Navigation.css'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { activePageAction } from './activePageAction'
import {
  searchAction,
  searchBasedAction
} from '../../components/search/searchAction'

const Navigation = props => {
  const handleActive = str => () => {
    props.activePageAct(str)
  }
  const goHome = () => {
    props.activePageAct('home')
    props.history.push('/home')
  }

  const handleMovieSearch = e => {
    let value = e.target.value
    props.searchAct(value)
    props.searchBasedAct(value)
  }
  return (
    <div className='navigation__container'>
      <div className='navigation__tabs--root'>
        <div className='show-time__icon' onClick={goHome}>
          <img src={showTime} alt='' />
        </div>
        <div className='navigation__tabs'>
          <Link
            style={{ textDecoration: 'none' }}
            to='/home'
            onClick={handleActive('home')}
          >
            <div className={props.selectedRoute === 'home' ? 'under-lien' : ''}>
              Home
            </div>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='/movies'
            onClick={handleActive('movie')}
          >
            <div
              className={props.selectedRoute === 'movie' ? 'under-lien' : ''}
            >
              Movies
            </div>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='/tv-shows'
            onClick={handleActive('tvshow')}
          >
            <div
              className={props.selectedRoute === 'tvshow' ? 'under-lien' : ''}
            >
              TV Shows
            </div>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='/new-released'
            onClick={handleActive('newreleased')}
          >
            <div
              className={
                props.selectedRoute === 'newreleased' ? 'under-lien' : ''
              }
            >
              New Released
            </div>
          </Link>

          <Link
            style={{ textDecoration: 'none' }}
            to='/favorite'
            onClick={handleActive('favorite')}
          >
            <div
              className={props.selectedRoute === 'favorite' ? 'under-lien' : ''}
            >
              Favorites
            </div>
          </Link>
        </div>
      </div>
      {/* second part */}

      <div className='navigation-info__container'>
        <Link
          to='/search'
          style={{ textDecoration: 'none' }}
          onClick={handleActive('search')}
        >
          <div className='navigation__search-wrapper'>
            <input
              className='search__input'
              type='text'
              placeholder='Search here'
              onChange={handleMovieSearch}
            />
            <img className='search__icon' src={searchImg} alt='' />
          </div>
        </Link>
        <div className='notification__icon'>
          <img src={notification} alt='' />
        </div>
        <div className='navgiation__user-wrapper'>
          <div>
            <img src={avatar} alt='' />
          </div>
          <div className='nav__user-name'>{props.login?.userName}</div>
          <div>
            <img src={down} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedRoute: state.page.activePage,
  login: state.login
})

const mapDispatchToProps = {
  activePageAct: activePageAction,
  searchAct: searchAction,
  searchBasedAct: searchBasedAction
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
)
