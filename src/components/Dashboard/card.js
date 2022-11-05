import React, { useState } from 'react'
import Desk from '../../images/img/desk.png'
function Card(props) {
  return (
    <div className="apply-card">
      <div className="flex justify-between items-center h-100 p-5">
        <div>
          <h1 className='pt-2'>Apply for a car loan !</h1>
          <p className='pt-2'>This is a sample of a generated text </p>
          <button className='apply-btn mt-4'>Discover More</button>
        </div>
        <div>
          <img src={Desk}></img>
        </div>
      </div>
    </div>
  )
}

export default Card
