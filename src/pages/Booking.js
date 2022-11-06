import React, { useState,useEffect } from 'react'
import DropdownComponent from '../components/Booking/dropdown'
import Carbox from '../components/Booking/Carbox'
import { ReactComponent as Filter1 } from '../images/svg/filters/filter.svg'
import { ReactComponent as Filter2 } from '../images/svg/filters/filter2.svg'
import Car from '../images/img/audi.png'
function Booking() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    fetch(`https://mocki.io/v1/9eb5f170-c9ec-4137-b9f9-8ba3e275c080`)
      .then((response) => response.json())
      .then((Data) => {
        setLoading(false)
        setData(Data)
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      })
  }, [])

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
      {!loading &&
          data.map((e) => (
            <Carbox bg="#FFFFFF" img={e.imageurl} controle={e.controle} title={e.carname} type={e.type} priceday={e.priceday} nbrplace={e.nbrplace} />
          ))}
       
      
      </div>
    </div>
  )
}

export default Booking
