import * as React from 'react'

function Refresh (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 0v3c4.42 0 8 3.58 8 8 0 1.57-.46 3.03-1.24 4.26L13.3 13.8c.45-.83.7-1.79.7-2.8 0-3.31-2.69-6-6-6v3L4 4l4-4zM2 11c0 3.31 2.69 6 6 6v-3l4 4-4 4v-3c-4.42 0-8-3.58-8-8 0-1.57.46-3.03 1.24-4.26L2.7 8.2C2.25 9.03 2 9.99 2 11z'
        fill={props.color}
      />
    </svg>
  )
}

export default Refresh
