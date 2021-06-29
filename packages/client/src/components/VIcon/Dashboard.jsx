import * as React from 'react'

export default function Dashboard (props) {
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
        d='M0 0h8v10H0V0zm18 0h-8v6h8V0zM6 8V2H2v6h4zm10-4V2h-4v2h4zm0 6v6h-4v-6h4zM6 16v-2H2v2h4zm12-8h-8v10h8V8zM0 12h8v6H0v-6z'
        fill={props.color}
      />
    </svg>
  )
}
