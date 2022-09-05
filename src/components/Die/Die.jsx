import React from 'react'
import "./Die.css"

const Die = ({ number }) => {
  return (
    <div className='die'>
      <h1 className='die-number'>
        {number}
      </h1>
    </div>
  )
}

export default Die