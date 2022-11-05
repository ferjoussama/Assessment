import React, { useState } from 'react'
import { ReactComponent as Icon } from '../../images/svg/recommended/icon.svg'
import { ReactComponent as Icon1 } from '../../images/svg/recommended/icon1.svg'
import { ReactComponent as Icon2 } from '../../images/svg/recommended/icon2.svg'
import { ReactComponent as Icon3 } from '../../images/svg/recommended/icon3.svg'

function Recommendedbox(props) {
  return (
    <div className="Recommended-box p-5" style={{ background: props.bg }}>
      <div className="flex items-center ">
        <Icon />
        <p className="font-medium ml-4">{props.percent} Recommended</p>
      </div>
      <img src={props.img}></img>
      <p className="font-bold text-lg ">{props.title} </p>
      <div className="mt-1">
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <Icon1 />
            <p className="font-medium ml-4 text-slate-600 font-medium">132 K</p>
            <div className="ml-4">
              <Icon2 />
            </div>
            <div className="ml-4">
              <Icon3 />
            </div>
          </div>
          <div>
            <p className="text-slate-600 font-medium float-right">$32/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendedbox
