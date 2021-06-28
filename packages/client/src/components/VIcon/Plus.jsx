import * as React from 'react'

function Plus (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm11 1h4V9h-4V5H9v4H5v2h4v4h2v-4z'
        fill={props.color}
      />
    </svg>
  )
}

export default Plus
