import React from 'react'
import bg from './images/herobg.png'
import playImg from './images/play.png'
import plusImg from './images/plus.png'
import StrangerThingImg from './images/stranger-things-content.png'
import './App.css'
import { getMovies } from './utls'

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '100% 100%',
        minHeight: '647px',
        marginTop: '78px'
      }}
    >
      <div className='banner__content'>
        <img
          className='banner__starnger--img-size'
          src={StrangerThingImg}
          alt=''
        />
        <div className='banner__content--heading'>
          Watch the Season Finale Now
        </div>
        <div className='banner__content--text'>
          Every horror sequel has its own set of rules. Can this new generation
          of teens survive long enough to figureout theirs?
        </div>
        <div className='banner__btn--container'>
          <div className='play--btn'>
            <img src={playImg} alt='' /> <span>Play</span>
          </div>
          <div className='transfarent--btn'>
            <img src={plusImg} alt='' />
            <span>MY LIST</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
