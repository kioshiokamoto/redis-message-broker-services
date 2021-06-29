import * as React from 'react'

export default function Products (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.1 0H.9C.4 0 0 .4 0 .9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V.9c0-.5-.5-.9-.9-.9zM6 4H4v2h2V4zm8 0H8v2h6V4zm0 4H8v2h6V8zm-6 4h6v2H8v-2zM4 8h2v2H4V8zm2 4H4v2h2v-2zm-4 4h14V2H2v14z'
        fill={props.color}
      />
    </svg>
  )
}
