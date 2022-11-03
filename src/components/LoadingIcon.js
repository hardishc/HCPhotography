import React from 'react'
import './LoadingIcon.css';

function LoadingIcon() {
  return (
    <>
      <svg className="loadingSVG" width="85mm" height="70mm" version="1.1" viewBox="0 0 85 70" xmlns="http://www.w3.org/2000/svg">
        <g fillRule="evenodd" strokeMiterlimit="0" strokeWidth="0">
          <rect className="button" x="12.084" y="12.66" width="16.006" height="4.1497" ry="2.0749" fill="#a0a0a0" paintOrder="stroke fill markers" />
          <g className="body" transform="translate(-59.943 -99.975)">
            <rect x="64.617" y="115.3" width="75.88" height="49.796" ry="6.8174" fill="#fff" paintOrder="stroke fill markers" />
            <path d="m94.257 115.9 6.3113-10.671 16.596 0.2964 5.8438 10.374z" fill="#fff" paintOrder="stroke fill markers" />
            <rect x="122.42" y="119.75" width="10.967" height="5.6317" ry="2.0749" paintOrder="stroke fill markers" />
            <circle cx="102.11" cy="140.35" r="15" paintOrder="stroke fill markers" />
            <circle cx="102.26" cy="140.5" r="12" fill="#fff" paintOrder="stroke fill markers" />
          </g>
          <g className="clicked" transform="translate(-59.943 -99.975)" fill="#fff">
            <rect transform="rotate(-45)" x="-26.232" y="121.02" width="2.3713" height="8.003" ry="1.6558" paintOrder="stroke fill markers" />
            <rect transform="matrix(.70711 .70711 .70711 -.70711 0 0)" x="137.14" y="-15.739" width="2.3713" height="8.003" ry="1.6558" paintOrder="stroke fill markers" />
            <rect transform="scale(-1,1)" x="-81.586" y="101.45" width="2.3713" height="8.003" ry="1.6558" paintOrder="stroke fill markers" />
          </g>
        </g>
      </svg>

    </>
  )
}

export default LoadingIcon
