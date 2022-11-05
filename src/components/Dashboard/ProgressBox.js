import React, { useState } from 'react'

function ProgressBox(props) {
  return (
    <div className="progressbox" style={{ background: props.bg }}>
      <div>
        <props.icon />
      </div>
      <p className="text-lg font-medium" style={{ color: props.colortitle }}>
        {props.title}
      </p>
      <div className="progress">
        <div className="barOverflow">
          <div
            className="bar"
            style={{
              transform: `rotate(${props.deg}deg)`,
              borderBottomColor: props.bordercolor,
              borderRightColor: props.bordercolor,
            }}
          ></div>
        </div>
        <span style={{ color: props.colortitle }} className="font-semibold">
          {props.percent}
        </span>
      </div>
    </div>
  )
}

export default ProgressBox
