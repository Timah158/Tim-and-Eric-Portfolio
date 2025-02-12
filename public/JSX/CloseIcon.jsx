import * as React from "react"
import '/src/app/components/footer.modules.css'


function CloseIcon(props) {
  return (
    <svg
      width={600}
      height={600}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_1_6)" fill="#fff" id="Xbutton">
        <rect
          x={66.6548}
          y={470.919}
          width={600}
          height={60}
          rx={30}
          transform="rotate(-45 66.655 470.919)"
        />
        <rect
          x={109.081}
          y={46.6548}
          width={600}
          height={60}
          rx={30}
          transform="rotate(45 109.081 46.655)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_6"
          x={75.0812}
          y={59.0812}
          width={449.838}
          height={449.838}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_6" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default CloseIcon
