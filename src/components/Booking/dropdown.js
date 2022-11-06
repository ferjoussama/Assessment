import React from 'react'

export default function DropdownComponent(props) {
  return (
    <div className="relative border text-gray-800 bg-white  select-option">
      <select
        className="appearance-none w-full py-1 px-2 bg-white"
        onChange={(e) => props.filterItem(e.target.value)}
      >
        <option value="all">all</option>
        {props.listitems &&
          props.listitems.map((e, key) => (
            <option key={key} value={e}>
              {e}
            </option>
          ))}
      </select>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 ">
        <svg
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9142 0C12.4592 0 12.7622 0.630456 12.4218 1.05605L6.84083 8.03221C6.58062 8.35748 6.08592 8.35748 5.8257 8.03221L0.244776 1.05605C-0.0957003 0.630455 0.207313 0 0.752341 0L11.9142 0Z"
            fill="#B4B4C6"
          />
        </svg>
      </div>
    </div>
  )
}
