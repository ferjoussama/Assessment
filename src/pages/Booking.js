import React, { useState, useEffect } from 'react'
import DropdownComponent from '../components/Booking/dropdown'
import Carbox from '../components/Booking/Carbox'
import { ReactComponent as Filter1 } from '../images/svg/filters/filter.svg'
import { ReactComponent as Filter2 } from '../images/svg/filters/filter2.svg'
import { useSearchParams } from 'react-router-dom'

function Booking() {
  const [data, setData] = useState([])
  const [dataFilter, setdataFilter] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterlist, setFilterlist] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch(`https://mocki.io/v1/9eb5f170-c9ec-4137-b9f9-8ba3e275c080`)
      .then((response) => response.json())
      .then((Data) => {
        setLoading(false)
        if (searchParams.get('type') != null) {
          const filtereddata= Data.filter((newVal) => {
            return newVal.type.toLowerCase() === searchParams.get('type')
          })
          setData(filtereddata);
        } else {
          setData(Data)
        }
        setdataFilter(Data)

        const datatypes = [...new Set(Data.map((q) => q.type))]
        setFilterlist(datatypes)
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      })
  }, [])

  const filterItem = (type) => {
    if (type == 'all') {
      setData(dataFilter)
    } else {
      const newData = dataFilter.filter((newVal) => {
        return newVal.type === type
      })
      setData(newData)
    }
  }

  return (
    <div className="booking-page container mx-auto">
      <h1 className="font-bold text-3xl">Booking</h1>
      <div className=" flex items-center justify-between filters">
        <div className="flex items-center itemfilter">
          <DropdownComponent listitems={filterlist} filterItem={filterItem} />
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
          data.map((e, key) => (
            <Carbox
              key={key}
              bg="#FFFFFF"
              img={e.imageurl}
              controle={e.controle}
              title={e.carname}
              type={e.type}
              priceday={e.priceday}
              nbrplace={e.nbrplace}
            />
          ))}
      </div>
    </div>
  )
}

export default Booking
