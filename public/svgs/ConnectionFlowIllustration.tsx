import React from "react";

export default function ConnectionFlowIllustration({
  className = "",
  ...props
}) {
  return (
    <svg
      width="369"
      height="195"
      viewBox="0 0 369 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Left Curves */}
      <path
        d="M5.0098 0.49939C27.6765 1.66606 88.8098 20.0994 152.01 84.4994"
        stroke="url(#paint0_linear_0_1)"
        strokeDasharray="4 4"
      />
      <path
        d="M4.0098 192.999C26.6765 191.833 87.8098 173.399 151.01 108.999"
        stroke="url(#paint1_linear_0_1)"
        strokeDasharray="4 4"
      />
      <path
        d="M2.5098 62.9995C28.0098 62.4995 93.8098 68.8995 153.01 98.4995"
        stroke="url(#paint2_linear_0_1)"
        strokeDasharray="4 4"
      />
      <path
        d="M0.00979614 131.499C25.5098 131.999 91.3098 125.599 150.51 95.9993"
        stroke="url(#paint3_linear_0_1)"
        strokeDasharray="4 4"
      />

      {/* Center Box with Glow & Inner Shadow */}
      <g filter="url(#filter0_di_0_1)">
        <rect
          x="140.01"
          y="59.9994"
          width="75.3612"
          height="76"
          rx="18"
          fill="url(#paint4_linear_0_1)"
        />
      </g>

      {/* Center Image Pattern */}
      <rect
        x="151.801"
        y="64.1429"
        width="51.8877"
        height="67.5747"
        fill="url(#pattern0_0_1)"
      />

      {/* Right Curves */}
      <path
        d="M367.51 5.49928C355.01 -2.33405 307.71 2.99928 218.51 86.9993"
        stroke="url(#paint5_linear_0_1)"
        strokeDasharray="4 4"
      />
      <path
        d="M366.01 191.499C353.51 199.333 306.21 193.999 217.01 109.999"
        stroke="url(#paint6_linear_0_1)"
        strokeDasharray="4 4"
      />
      <path
        d="M367.01 65.4994C360.01 59.8327 319.91 57.4994 215.51 93.4994"
        stroke="url(#paint7_linear_0_1)"
        strokeDasharray="4 4"
      />
      <path
        d="M368.51 132.999C361.51 138.666 321.41 140.999 217.01 104.999"
        stroke="url(#paint8_linear_0_1)"
        strokeDasharray="4 4"
      />

      <defs>
        {/* Glow & Shadow Filter */}
        <filter
          id="filter0_di_0_1"
          x="119.01"
          y="38.9994"
          width="117.361"
          height="118"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.337255 0 0 0 0 0.866667 0 0 0 0 0.721569 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1" />
        </filter>

        {/* Pattern with standard href */}
        <pattern
          id="pattern0_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_0_1" transform="scale(0.00632464 0.00485642)" />
        </pattern>

        {/* Linear Gradients */}
        <linearGradient
          id="paint0_linear_0_1"
          x1="154.51"
          y1="0.954741"
          x2="-1.69048"
          y2="16.2294"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#56DDB8" />
          <stop offset="1" stopColor="#194999" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_0_1"
          x1="153.51"
          y1="192.544"
          x2="-2.69048"
          y2="177.269"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#56DDB8" />
          <stop offset="1" stopColor="#194999" />
        </linearGradient>

        <linearGradient
          id="paint2_linear_0_1"
          x1="155.569"
          y1="63.1656"
          x2="2.68776"
          y2="99.3559"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#56DDB8" />
          <stop offset="1" stopColor="#194999" />
        </linearGradient>

        <linearGradient
          id="paint3_linear_0_1"
          x1="153.069"
          y1="131.333"
          x2="0.187755"
          y2="95.1428"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#56DDB8" />
          <stop offset="1" stopColor="#194999" />
        </linearGradient>

        <linearGradient
          id="paint4_linear_0_1"
          x1="173.128"
          y1="63.5288"
          x2="204.189"
          y2="135.415"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#56DDB8" />
          <stop offset="1" stopColor="#1E74BB" />
        </linearGradient>

        <linearGradient
          id="paint5_linear_0_1"
          x1="370.044"
          y1="3.35907"
          x2="211.756"
          y2="19.0306"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#194999" />
          <stop offset="1" stopColor="#56DDB8" />
        </linearGradient>

        <linearGradient
          id="paint6_linear_0_1"
          x1="368.544"
          y1="193.64"
          x2="210.256"
          y2="177.968"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#194999" />
          <stop offset="1" stopColor="#56DDB8" />
        </linearGradient>

        <linearGradient
          id="paint7_linear_0_1"
          x1="369.586"
          y1="62.3996"
          x2="218.164"
          y2="103.395"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#194999" />
          <stop offset="1" stopColor="#56DDB8" />
        </linearGradient>

        <linearGradient
          id="paint8_linear_0_1"
          x1="371.086"
          y1="136.099"
          x2="219.664"
          y2="95.1035"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#194999" />
          <stop offset="1" stopColor="#56DDB8" />
        </linearGradient>

        {/* Embedded Base64 Image */}
        <image
          id="image0_0_1"
          width="592"
          height="206"
          preserveAspectRatio="none"
          href="data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAADOCAYAAADxETxfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcxSURBVHgB7dtPatsxGIfxcy30BN6jdzc=Q1dBz6ZqL0Juk79A7F+qV0s2gN/D+bT7X1q2f/x0QeODxM8lITB7P59uVAAAAAAAAAAAAAACAf/H7b0V8v08q/p5f52/n8eN89wAAAAAAwAf2i22f9/r9zY8e9X0FAAAAAACgU/E175f7v+p63X71vQAAAAAAAPzRry9Z7W9v4+V0v98kL/a9BQAAAAAAoFOBv7+9/1m5xevv7wsAAAAAAD748bWc7+W9j52+z/95LAAAAAAAfH3/luf2fQYAAAAAAOBfvX4UAAAAAAAAAAAAAAD/4g9E8gHPAf6LPAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
