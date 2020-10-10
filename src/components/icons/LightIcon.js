import React from 'react';
import { Icon } from './Icon';

export const LightIcon = ({ on, ...props }) => (
  <Icon aria-labelledby="icon-home" viewBox="0 0 275.3 413.3" {...props}>
    <title id="icon-home">Bulb</title>
    <g id="bulb--off">
      <path
        fill="#E2ECF1"
        d="M137.7,13.7C67.2,13.7,10,70.9,10,141.4c0,58.3,72.8,118.2,79.9,162.3h47.8h47.8
            c7.1-44,79.9-103.9,79.9-162.3C265.3,70.9,208.2,13.7,137.7,13.7z"
      />
    </g>
    {on && (
      <g id="bulb--on">
        <path
          fill="#FFDB55"
          d="M137.7,13.7C67.2,13.7,10,70.9,10,141.4c0,58.3,72.8,118.2,79.9,162.3h47.8h47.8
          c7.1-44,79.9-103.9,79.9-162.3C265.3,70.9,208.2,13.7,137.7,13.7z"
        />
      </g>
    )}
    <g id="outline">
      <path
        fill="#F1F2F2"
        stroke="#38434A"
        strokeWidth="19.1022"
        strokeMiterlimit="10"
        d="M168.5,375.5h-61.7c-8.9,0-16-7.2-16-16
            v-55.8h93.8v55.8C184.6,368.3,177.4,375.5,168.5,375.5z"
      />
      <path
        fill="#F1F2F2"
        stroke="#38434A"
        strokeWidth="19.1022"
        strokeMiterlimit="10"
        d="M151.2,401.5h-27.1c-3.9,0-7-3.2-7-7v-19
            h41.1v19C158.2,398.4,155.1,401.5,151.2,401.5z"
      />
      <line
        fill="none"
        stroke="#38434A"
        strokeWidth="19.1022"
        strokeMiterlimit="10"
        x1="184.6"
        y1="339.6"
        x2="90.8"
        y2="339.6"
      />
      <path
        fill="none"
        stroke="#38434A"
        strokeWidth="19.1022"
        strokeMiterlimit="10"
        d="M137.7,13.7C67.2,13.7,10,70.9,10,141.4
            c0,58.3,72.8,118.2,79.9,162.3h47.8h47.8c7.1-44,79.9-103.9,79.9-162.3C265.3,70.9,208.2,13.7,137.7,13.7z"
      />
    </g>
    <g id="highlight">
      <path
        fill="#FFDB55"
        stroke="#FFFFFF"
        strokeWidth="21.0124"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M207.1,89.5
          c-12.3-16.1-28.4-29.1-46.9-37.8"
      />
      <path
        fill="#FFDB55"
        stroke="#FFFFFF"
        strokeWidth="21.0124"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M225,121.4
          c-0.8-2.2-1.8-4.4-2.7-6.5"
      />
    </g>
  </Icon>
);