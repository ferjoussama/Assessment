import React, { useState } from 'react'

function Badgebox(props) {
  return (
    <div className="badge-box" style={{ background: props.bg }}>
      <div className="flex items-center">
        <p className="text-white text-4xl font-bold">
          You <br />
          Have
          <br /> earned <br />{' '}
          <span style={{ color: props.pointsbg }}>{props.points}</span>{' '}
          {props.pointstext}
        </p>
        <img src={props.img} width="100%"></img>
      </div>
      <p className="pt-2  txt-badge">{props.text}</p>
    </div>
  )
}

export default Badgebox
