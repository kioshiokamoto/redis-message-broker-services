import * as React from 'react'

function MapPlace (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 14 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM2 7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C4.92 14.21 2 9.85 2 7zm2.5 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z'
        fill={props.color}
        fillOpacity={0.54}
      />
    </svg>
  )
}

export default MapPlace
