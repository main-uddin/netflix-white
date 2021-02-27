import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import img from '../../images/netflix-bg.jpg'

import './login.css'
import { setUserAction } from './loginAction'

const LoginContainer = props => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const handleChange = name => event => {
    const value = event.target.value
    name === 'name' ? setName(value) : setPass(value)
  }

  const handleClick = () => {
    if (name.trim(' ') !== '' && pass.trim(' ') !== '') {
      props.loginAct(name)
      props.history.push('/home')
    }
  }
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className='form-container'>
        <div className='sign-in__text'>Sign In</div>
        <input
          type='text'
          placeholder='User Name'
          onChange={handleChange('name')}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={handleChange('pass')}
        />
        <button onClick={handleClick} className='login-btn'>
          Log In
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  loginAct: setUserAction
}

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer))
