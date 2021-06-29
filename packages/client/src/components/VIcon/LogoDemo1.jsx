import * as React from "react"

function LogoDemo1(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 153 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M49.04 76.5c0-34.721 23.146-64.023 54.839-73.368A76.488 76.488 0 0082.217 0c-42.25 0-76.5 34.25-76.5 76.5 0 42.252 34.25 76.5 76.5 76.5a76.495 76.495 0 0021.662-3.129c-31.695-9.343-54.839-38.647-54.839-73.37z"
          fill="url(#prefix__paint0_linear)"
        />
        <path
          d="M106.135 46.746c18.676 0 34.44 12.45 39.465 29.5a41.183 41.183 0 001.683-11.651c0-22.723-18.423-41.143-41.148-41.146-22.725 0-41.15 18.42-41.15 41.143 0 4.048.598 7.959 1.688 11.652 5.028-17.047 20.79-29.495 39.462-29.498z"
          fill="url(#prefix__paint1_linear)"
        />
        <path
          d="M120.541 89.77c0 13.89-9.263 25.613-21.943 29.35a30.598 30.598 0 008.668 1.253c16.897 0 30.603-13.701 30.603-30.605S124.17 59.16 107.266 59.16c-3.007 0-5.921.44-8.668 1.253 12.68 3.738 21.943 15.462 21.943 29.356z"
          fill="url(#prefix__paint2_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={-23.388}
          y1={62.658}
          x2={103.112}
          y2={79.249}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.012} stopColor="#E0B386" />
          <stop offset={0.519} stopColor="#DA498C" />
          <stop offset={1} stopColor="#961484" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={135.361}
          y1={68.68}
          x2={25.685}
          y2={22.581}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB5C8B" />
          <stop offset={0.519} stopColor="#DE9088" />
          <stop offset={0.999} stopColor="#F4F9FF" />
          <stop offset={1} stopColor="#084698" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={131.295}
          y1={112.427}
          x2={45.589}
          y2={20.515}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.012} stopColor="#E0B386" />
          <stop offset={0.519} stopColor="#DA498C" />
          <stop offset={1} stopColor="#961484" />
        </linearGradient>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h153v153H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LogoDemo1