import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width="4em"
      height="4em"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M44 18.637l-.017-.03H14.66L0 44l14.66 25.394h29.323l.017-.03L29.356 44 44 18.637z"
          fill="#526AEE"
        />
        <path d="M29.356 44L44 18.637l-.017-.03H14.66L0 44" fill="#B1B5FA" />
        <path
          d="M73.34 18.607H44.016l-.016.03L58.644 44 44 69.363l.016.03H73.34L88 44 73.34 18.607z"
          fill="#6B44CF"
        />
        <path
          d="M88 44L73.34 18.607H44.016l-.016.03L58.644 44 44 69.363"
          fill="#A781DF"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h88v88H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
