import React from 'react'
import { Link } from 'react-router-dom'

const NotLog = () => {
  return (
    <div className='not-log-container'>
        <h1>Login required</h1>
        <button><Link to="/Login">Login</Link></button>
    </div>
  )
}

export default NotLog