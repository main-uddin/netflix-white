import React from 'react'

import fb from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import insta from '../../images/instagram.png'

import './Footer.css'
import { withRouter } from 'react-router'

const Footer = props => {
  return (
    <div
      className={
        props?.location?.pathname === '/home'
          ? 'footer-container'
          : 'footer-container-alt'
      }
    >
      <div className='social-media__icon'>
        <img src={fb} alt='' />
        <img src={insta} alt='' />
        <img src={twitter} alt='' />
        <img src={youtube} alt='' />
      </div>
      <div className='about-us'>
        <div className='first-section'>
          <p>Audio Description</p>
          <p>Jobs</p>
        </div>
        <div className='second-section'>
          <p>Help Center</p>
          <p>Terms of Use</p>
        </div>
        <div className='third-section'>
          <p>Media Center</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className='service-code'>Service Code</div>
      <div className='dummy-txt'> © 1997-2016 Showtime, Inc. </div>
    </div>
  )
}

export default withRouter(Footer)
