import React, { useState } from 'react'
import DropdownComponent from '../components/Booking/dropdown'
import Carbox from '../components/Booking/Carbox'
import { ReactComponent as Filter1 } from '../images/svg/filters/filter.svg'
import { ReactComponent as Filter2 } from '../images/svg/filters/filter2.svg'
import Car from '../images/img/audi.png'
function Booking() {
  return (
    <div className="booking-page container mx-auto">
      <h1 className="font-bold text-3xl">Booking</h1>
      <div className=" flex items-center justify-between filters">
        <div className="flex items-center itemfilter">
          <DropdownComponent />
          <div className='ml-2'>
          <DropdownComponent />
          </div>
        </div>
        <div className="flex items-center itemfilter">
          <button>
            {' '}
            <Filter1 />
          </button>
          <button>
            {' '}
            <Filter2 />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-5">
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
        <Carbox bg="#FFFFFF" img={Car} percent="64%" title="Porshe 718 Cayman S "/>
      </div>
    </div>
  )
}

export default Booking
