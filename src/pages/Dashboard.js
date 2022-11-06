import React, { useState, useEffect } from 'react'
import ProgressBox from '../components/Dashboard/ProgressBox'
import ApplyCard from '../components/Dashboard/card'
import Badgebox from '../components/Dashboard/badge'
import Recommendedbox from '../components/Dashboard/recommendedbox'
import { ReactComponent as Energy } from '../images/svg/progressbox/energy.svg'
import { ReactComponent as Break } from '../images/svg/progressbox/break.svg'
import { ReactComponent as Range } from '../images/svg/progressbox/range.svg'
import { ReactComponent as Tire } from '../images/svg/progressbox/tire.svg'
import badge1 from '../images/img/badge.png'
import badge2 from '../images/img/badge2.png'

function Dashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const BoxObjects = [
    {
      icon: Energy,
      bg: '#A162F7',
      colortitle: 'white',
      title: 'Energy',
      percent: '45%',
      deg: '120',
      progresscolor: '#FFFFFF',
    },
    {
      icon: Range,
      bg: '#FFFFFF',
      colortitle: 'black',
      title: 'Range',
      percent: '157%',
      deg: '160',
      progresscolor: '#FF7E86',
    },
    {
      icon: Break,
      bg: '#FFFFFF',
      colortitle: 'black',
      title: 'Break fluid',
      percent: '9%',
      deg: '90',
      progresscolor: '#A162F7',
    },
    {
      icon: Tire,
      bg: '#FFFFFF',
      colortitle: 'black',
      title: 'Tire Wear',
      percent: '25%',
      deg: '90',
      progresscolor: '#F6CC0D',
    },
  ]

  useEffect(() => {
    fetch(`https://mocki.io/v1/853e895c-f5a7-4476-a985-e74f5594b1ee`)
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
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {BoxObjects.map((e, key) => (
          <ProgressBox
            icon={e.icon}
            bg={e.bg}
            colortitle={e.colortitle}
            title={e.title}
            percent={e.percent}
            deg={e.deg}
            bordercolor={e.progresscolor}
            key={key}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
          <ApplyCard />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Badgebox
            bg="#0F2837"
            img={badge2}
            text="Hooray! Way to go Mohammed!"
            points="20"
            pointstext="Badges!"
            pointsbg="#FF9619"
          />
          <Badgebox
            bg="#6E1946"
            img={badge1}
            text="Redeem and claim your rewards!"
            points="1500"
            pointstext="Points!"
            pointsbg="#FAC39B"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-6">
        {!loading &&
          data.map((e) => (
            <Recommendedbox
              bg={e.bg}
              img={e.imageurl}
              percent={e.recommended}
              title={e.carname}
              ptr={e.ptr}
              priceh={e.priceh}
            />
          ))}
      </div>
    </div>
  )
}

export default Dashboard
