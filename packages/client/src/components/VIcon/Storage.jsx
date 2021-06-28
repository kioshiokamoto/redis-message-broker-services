import * as React from 'react'

export default function Storage (props) {
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
        d='M16 0H2C.9 0 0 .9 0 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM2 7h3.13c.21.78.67 1.47 1.27 2H2V7zm9.6 2H16V7h-3.13c-.21.78-.67 1.47-1.27 2zM16 5h-5v1c0 1.07-.93 2-2 2-1.07 0-2-.93-2-2V5H2V2h14v3zm-5 7h7v4c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-4h7v1c0 .47.19.9.48 1.25.37.45.92.75 1.52.75s1.15-.3 1.52-.75c.29-.35.48-.78.48-1.25v-1zm-9 2h3.13c.014.064.038.122.062.18.01.023.02.047.028.07.24.68.65 1.28 1.18 1.75H2v-2zm9.6 2H16v-2h-3.13c-.014.064-.038.122-.062.18-.01.023-.02.047-.028.07-.23.68-.64 1.28-1.18 1.75z'
        fill={props.color}
      />
    </svg>
  )
}
