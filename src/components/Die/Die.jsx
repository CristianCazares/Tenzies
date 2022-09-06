import React from 'react'
import "./Die.css"

const Die = (props) => {
  return (
    <div
      className={`${props.isHeld === true ? "die die-held" : "die"}`}
      onClick={props.handleClick}
    >
      <h1 className="die-number">
        {props.number}
      </h1>
    </div>
  )
}

export default Die