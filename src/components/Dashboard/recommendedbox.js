import React, { useState } from 'react'
import { ReactComponent as Icon } from '../../images/svg/recommended/icon.svg'
import { ReactComponent as icon1 } from '../../images/svg/recommended/icon1.svg'
import { ReactComponent as Icon2 } from '../../images/svg/recommended/icon2.svg'
import { ReactComponent as Icon3 } from '../../images/svg/recommended/icon3.svg'

function Recommendedbox(props) {
  return (
    <div className="Recommended-box px-4" style={{ background: props.bg }}>
      <div className="flex justify-center items-center">
        <Icon />
        <p>64 % Recommended</p>
      </div>
    </div>
  )
}

export default Recommendedbox
