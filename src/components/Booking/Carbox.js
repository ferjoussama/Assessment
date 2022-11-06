import React, { useState } from 'react'
import { ReactComponent as Manual } from '../../images/svg/booking/manual.svg'
import { ReactComponent as Nbr } from '../../images/svg/booking/nbr.svg'
import { ReactComponent as Heart } from '../../images/svg/booking/heart.svg'
function CarBox(props) {
  return (
    <div className="car-box p-5" style={{ background: props.bg }}>
      <div className="flex items-center justify-between">
        
      <p className="font-bold text-lg ">{props.title} </p>
        <Heart />
      </div>
      <p className="font-mediual text-gray ">{props.type} </p>
      <img src={props.img} width></img>
    
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <Nbr />
            <p className="font-medium ml-4 text-slate-600 font-medium">{props.nbrplace}</p>
            <div className='flex items-center ml-4'>
              <Manual />
              <p className="font-medium ml-4 text-slate-600 font-medium">{props.controle}</p>
            </div>
        
          </div>
          <div>
            <p className="text-slate-600 font-medium float-right"><span className='font-bold text-black'>${props.priceday}</span>/d</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarBox
