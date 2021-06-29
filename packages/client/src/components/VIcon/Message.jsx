import * as React from 'react'

function Message (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 13 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.797 2.176c0-.665-.538-1.21-1.203-1.21H1.921c-.666 0-1.21.545-1.21 1.21V9.43c0 .665.544 1.209 1.21 1.209h8.464l2.418 2.418-.006-10.882zm-1.203 0v7.962l-.707-.707H1.92V2.176h9.673zm-1.21 4.836H3.13v1.21h7.255v-1.21zM3.13 5.2h7.255v1.209H3.13v-1.21zm7.255-1.814H3.13v1.209h7.255v-1.21z'
        fill={props.color}
      />
    </svg>
  )
}

export default Message
