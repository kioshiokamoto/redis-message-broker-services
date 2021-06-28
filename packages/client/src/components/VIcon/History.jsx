import * as React from 'react'

export default function History (props) {
  return (
    <svg
      width={18}
      height={16}
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.75 8a7.5 7.5 0 117.5 7.5 7.462 7.462 0 01-5.3-2.2l1.183-1.183a5.786 5.786 0 004.117 1.716A5.829 5.829 0 0016.083 8a5.829 5.829 0 00-5.833-5.833A5.83 5.83 0 004.417 8h2.5L3.55 11.358l-.058-.116L.25 8h2.5zm6.667.833V4.667h1.25v3.458L13.6 9.867l-.642 1.066-3.541-2.1z'
        fill={props.color}
      />
    </svg>
  )
}
