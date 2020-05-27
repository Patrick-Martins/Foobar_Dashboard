import React from "react";
import "../styling/orders.css";
// import { ReactComponent as AlienSVG } from "../images/svgs/alien.svg";

// export default function AlienSign(props) {
//   return <AlienSVG />;
// }

export default function AlienSign(props) {
  let alienClass;
  if (props.queue === 1) {
    alienClass = "greenAlien";
  } else if (props.queue === 2) {
    alienClass = "yellowAlien";
  } else if (props.queue >= 3) {
    alienClass = "redAlien";
  }
  return (
    // style="enable-background:new 0 0 239 386.6;"
    <svg version="1.1" id="alien" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 239 386.6" xmlspace="preserve" className={alienClass}>
      <g id="alien-body">
        <path
          class="st0"
          d="M167.8,216.6v-81.3c0.9,2.3,3.9,9.1,8.1,9.1s7.6-7,8.8-9.9v82.2c0.2,4.7-3.5,8.6-8.2,8.8
     c-4.7,0.2-8.6-3.5-8.8-8.2C167.8,217,167.8,216.8,167.8,216.6L167.8,216.6z"
        />
        <path
          class="st0"
          d="M220.4,69.7c1.2,7.7-0.9,15.6-5.8,21.7c-0.1,0.2-0.3,0.4-0.5,0.6c-2.7,3.3-6,6-9.7,8.2c-0.1,0-0.1,0.1-0.2,0.1
     c0,0,0,0-0.1,0.1s-0.1,0.4-0.2,0.9c0,0.2-0.1,0.4-0.2,0.7c-1.5,5.4-7.2,22.9-17.5,31.2l-0.7,0.6l-0.5,0.4c0,0-0.1,0.1-0.1,0.1l0,0
     c-3.1,2.2-6.8,3.5-10.5,3.5c-2.4-0.1-4.6-1.1-6.4-2.7l0,0c-0.5-0.4-0.9-0.8-1.4-1.2c-2-1.9-3.7-4-5.3-6.2c-0.1-0.1-0.2-0.3-0.3-0.4
     c-2.4-3.5-4.6-7.1-6.5-10.9c-0.3-0.5-0.6-1-0.8-1.6c-3.9-7.8-6.3-14.5-6.3-14.5c-3.7-2.5-7-5.7-9.7-9.4V91c-4-5.2-6.3-11.5-6.5-18
     c0,0-14.1-60.4,43.5-64.2C174.5,8.9,229.2,7.4,220.4,69.7z"
        />

        <ellipse transform="matrix(0.6588 -0.7523 0.7523 0.6588 -8.3171 142.402)" class="st1" cx="152.8" cy="80.4" rx="13.1" ry="20.1" />
        <ellipse transform="matrix(0.7523 -0.6588 0.6588 0.7523 -3.4012 151.6594)" class="st1" cx="200" cy="80.4" rx="20.1" ry="13.1" />
        <ellipse transform="matrix(0.7523 -0.6588 0.6588 0.7523 -9.7498 115.0356)" class="st2" cx="148.1" cy="70.5" rx="1.8" ry="3.6" />
        <ellipse transform="matrix(0.6588 -0.7523 0.7523 0.6588 17.8773 178.7822)" class="st2" cx="206" cy="69.7" rx="3.6" ry="1.8" />
        <path
          class="st0"
          d="M200.2,260.8l-7.9-2c-6.4-1.6-11.9,9.6-12.1,22.9l-1.6,100.4c0,1.6,1.5,3.3,3.5,3.8l2.4,0.6
     c1.9,0.5,3.8-0.3,4.1-1.9l18.6-96.1C209.5,275.8,206.6,262.4,200.2,260.8z"
        />
        <path
          class="st0"
          d="M162.8,179.8c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0.2-0.4,0.3-0.6c0.3-0.7,0.6-1.4,0.7-2.2
     c0.9-5.5-2.8-10.6-8.3-11.5c-2.2-0.4-4.5,0.1-6.5,1.2l0,0c-1.2,0.7-2.2,1.6-2.9,2.8l-35,52.4l-47.7-56.7c-1.3-1.5-4.4-1.1-6.9,0.9
     c-2.1,1.6-3.3,3.8-3.1,5.4c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.3c0.1,0.2,0.2,0.5,0.3,0.7l46.3,65.9l3.4,4.8
     c1.4,1.9,3.4,3.3,5.7,3.7l11.1-13.8l28.2-35.3l0,0l0.6-0.8L162.8,179.8z"
        />
        <path
          class="st0"
          d="M239,219.2l-8.2,13l-17.2,27.4c-1,1.7-4.2,1.7-7,0s-4.4-4.3-3.5-6l17.9-34.8l-30.5-41.6
     c-3.1-4.4-2-10.4,2.4-13.4c0.1-0.1,0.2-0.1,0.3-0.2c1.8-1.2,4-1.8,6.2-1.7c3.1,0.2,5.8,1.8,7.5,4.4l22.3,36.7L239,219.2z"
        />
        <path
          class="st0"
          d="M152.4,260.5l8-1.8c6.5-1.4,11.6,10,11.5,23.2l-1.3,100.4c0,1.6-1.6,3.2-3.6,3.6l-2.4,0.5c-2,0.4-3.8-0.4-4-2
     l-15.9-96.6C142.7,275.2,146,262,152.4,260.5z"
        />
        <path
          class="st0"
          d="M176,294.1L176,294.1c-4.3,0-8.5-1.7-11.6-4.8l-11.5-11.4c-5.1-5.1-8.2-11.9-8.8-19.1c-0.1-1.5,0.2-3,0.9-4.3
     c9.8-21.8,8.8-45-0.3-69.1c-0.5-1.2-0.7-2.4-0.6-3.7c1.1-16.8,15-29.9,31.8-30l0,0c17.1,0.1,31.1,13.5,31.9,30.6
     c0,0.9-0.1,1.7-0.3,2.5c-5,21.1-10,42.1-0.3,70.6c0.4,1.1,0.6,2.3,0.5,3.5c-0.4,7-3.4,13.5-8.3,18.5l-11.9,11.9
     C184.5,292.4,180.3,294.2,176,294.1z"
        />
      </g>
      <g id="alien-shadow">
        <path
          class="st3"
          d="M137.7,67.1c4.8-5.5,15.5-4,23.8,3.4c5.3,4.6,8.4,10.5,8.8,15.5c0.4-5.4-2.8-12.1-8.8-17.3
     c-8.4-7.3-19-8.9-23.8-3.4c-1.8,2.1-2.6,4.9-2.3,7.6C135.5,70.8,136.3,68.7,137.7,67.1z"
        />
        <path
          class="st3"
          d="M191.3,70.5c8.4-7.3,19-8.8,23.8-3.4c1.3,1.6,2.1,3.5,2.2,5.6c0.4-2.8-0.4-5.7-2.2-7.9
     c-4.8-5.5-15.4-3.9-23.8,3.4c-6,5.3-9.2,12.1-8.7,17.6C183.1,80.7,186.1,75,191.3,70.5z"
        />
        <ellipse transform="matrix(0.3348 -0.9423 0.9423 0.3348 42.7204 162.3934)" class="st3" cx="136.4" cy="50.9" rx="4.2" ry="1.8" />
        <ellipse transform="matrix(0.3348 -0.9423 0.9423 0.3348 41.6856 171.7553)" class="st3" cx="142.5" cy="56.4" rx="3" ry="1.4" />
        <ellipse transform="matrix(0.9423 -0.3348 0.3348 0.9423 -6.7321 73.7608)" class="st3" cx="210.6" cy="56.4" rx="1.4" ry="3.1" />
        <path class="st4" d="M185.5,65.9l-8.8,9.1l-9.1-8.8C173.7,69.9,179.6,69.6,185.5,65.9z" />
        <path class="st5" d="M182.9,121.5c-5.2,1.1-12.7,0-12.7,0l3.5-2.4l2.8,0.8l3-0.8L182.9,121.5z" />

        <ellipse transform="matrix(0.2331 -0.9725 0.9725 0.2331 33.5828 247.0292)" class="st5" cx="173.4" cy="102.2" rx="2.6" ry="1.6" />

        <ellipse transform="matrix(0.9725 -0.2331 0.2331 0.9725 -18.8634 44.8725)" class="st5" cx="180.4" cy="102.2" rx="1.6" ry="2.6" />
        <path
          class="st6"
          d="M166.4,134c-4.1-3.5-8.4-10.6-12.9-19.1c-3.9-7.8-6.3-14.5-6.3-14.5c-3.7-2.6-7-5.7-9.7-9.4
     c0.6,0.6,12.5,11.2,23.2,8.6c0,0-3,4.1-7.1,4.1C156.2,104.2,165.3,107.5,166.4,134z"
        />
        <path
          class="st6"
          d="M184.9,134.3c4.5-3,9.8-9.6,13.7-18.6c2.4-4.9,4.2-10,5.5-15.3c4.1-2.2,7.6-5.3,10.4-9
     c-0.6,0.6-13.3,10.8-23.9,8.2c0,0,3,4.1,7.1,4.1C195.2,104.2,186,107.7,184.9,134.3z"
        />
        <path
          class="st7"
          d="M184.8,134.4L184.8,134.4c-1.2,2.9-4.6,9.9-8.8,9.9s-7.3-6.8-8.1-9.1c1.8,1.6,4,2.5,6.4,2.7
     C178,137.8,181.7,136.6,184.8,134.4z"
        />
        <path
          class="st6"
          d="M199.8,275.4l-11.9,11.9c-6.4,6.4-16.7,6.4-23.1,0l-11.5-11.5c-5.1-5.1-8.2-11.9-8.8-19.1c0-0.3,0-0.5,0-0.8
     c-0.3,0.9-0.4,1.9-0.3,2.8c0.5,7.2,3.7,14,8.8,19.1l11.5,11.4c6.4,6.4,16.7,6.4,23.1,0c0,0,0,0,0,0l11.9-11.9
     c4.5-4.5,7.4-10.4,8.2-16.8C206.5,266.2,203.8,271.4,199.8,275.4z"
        />
        <path class="st6" d="M203.4,204c1.1-6.5,2.6-12.9,4.1-19.2c0.1-0.5,0.2-1.1,0.2-1.7C206.2,190,204.5,196.9,203.4,204z" />
        <path
          class="st6"
          d="M151.2,233.1c2.7-16,0.3-32.6-6.1-49.8c-0.5-1.2-0.7-2.4-0.6-3.7c0-0.7,0.1-1.4,0.2-2.1
     c-0.3,1.4-0.5,2.7-0.5,4.1c-0.1,1.3,0.2,2.5,0.6,3.7C150.9,201.8,153.3,217.7,151.2,233.1z"
        />
        <path
          class="st7"
          d="M196.8,162.1l-17.4,3.4c-0.3,0.1-0.7-0.1-0.8-0.4l0,0c0-0.3,0.3-0.2,0.7-0.3l16.9-5c0.4-0.1,1.2,1.4,1.2,1.7
     l0,0C197.5,161.8,197.2,162.1,196.8,162.1C196.8,162.1,196.8,162.1,196.8,162.1z"
        />
        <path class="st7" d="M171.2,150.7c0,0,1.8,9.2,4.9,9.8c0,0,3.1,0.8,5.1-9.6c0,0-0.8,11.4-4.9,12.3S171.2,150.7,171.2,150.7z" />
        <path
          class="st7"
          d="M155.3,162.1l17.5,3.4c0.3,0.1,0.7-0.1,0.8-0.4l0,0c0-0.3-0.3-0.2-0.7-0.3l-16.9-5c-0.4-0.1-1.2,1.4-1.2,1.7
     l0,0C154.7,161.8,154.9,162.1,155.3,162.1z"
        />
        <path
          class="st6"
          d="M172.9,278.7c-18.1,0.3-23.9-20-23.9-20s5.9,6.8,10.3-1c0,0-3.9,6.8,0.3,7.6c0,0,8.8-2.7,9.5,2.9L172.9,278.7z
     "
        />
        <path
          class="st6"
          d="M180.4,279.1c18.1-0.9,22.4-21.6,22.4-21.6s-5.4,7.2-10.3-0.3c0,0,4.3,6.5,0.2,7.6c0,0-9-2.1-9.3,3.6
     L180.4,279.1z"
        />
        <ellipse class="st6" cx="177.4" cy="252.8" rx="1.1" ry="2.4" />
        <path
          class="st7"
          d="M170.7,204.2L174,170c0.1-0.7-0.1-1.4-0.4-1.4l0,0c-0.3,0-0.2,0.6-0.3,1.4l-4.9,33.6c-0.1,0.7,1.4,1.9,1.7,1.9
     l0,0C170.4,205.6,170.7,205,170.7,204.2z"
        />
        <path
          class="st7"
          d="M182.3,204.3l-3.6-34.4c-0.1-0.7,0.1-1.4,0.4-1.4l0,0c0.3,0,0.2,0.7,0.3,1.4l5.2,33.8c0.1,0.7-1.4,1.9-1.7,1.9
     l0,0C182.7,205.7,182.4,205.1,182.3,204.3z"
        />
        <path
          class="st6"
          d="M173.9,216.7c-4.3-0.2-8.4-1.6-11.9-4c-1.9-1.2-3.4-2.8-4.5-4.8c-1-2-1.4-4.2-1-6.4h0.3c0.9,1.8,2,3.5,3.1,5.1
     c1,1.6,2.2,3.1,3.5,4.5c1.5,1.3,3.1,2.4,4.9,3.3c1.8,0.9,3.7,1.7,5.7,2.1L173.9,216.7z"
        />
        <path
          class="st6"
          d="M172.6,229c-4.3-0.2-8.4-1.6-11.9-4c-1.9-1.2-3.4-2.8-4.5-4.8c-1-2-1.3-4.2-1-6.4l0.2,0c0.9,1.8,2,3.5,3.1,5.1
     c1,1.6,2.2,3.1,3.5,4.5c1.5,1.3,3.1,2.4,4.9,3.3c1.8,0.9,3.7,1.7,5.7,2.1L172.6,229z"
        />
        <path
          class="st6"
          d="M173.4,242.3c-4.3-0.2-8.4-1.6-11.9-4c-1.9-1.2-3.5-2.8-4.5-4.8c-1-2-1.3-4.2-1-6.4l0.3,0
     c0.9,1.8,2,3.5,3.1,5.1c1,1.6,2.2,3.1,3.5,4.5c1.5,1.3,3.1,2.4,4.9,3.3c1.8,0.9,3.7,1.7,5.7,2.1L173.4,242.3z"
        />
        <path
          class="st6"
          d="M179.4,216.6c1.9-0.6,3.8-1.5,5.5-2.5c1.7-1,3.3-2.2,4.7-3.6c1.2-1.4,2.3-3,3.2-4.7c1-1.7,1.9-3.5,2.7-5.3h0.3
     c0.5,2.2,0.3,4.4-0.6,6.5c-0.9,2-2.4,3.8-4.2,5.1c-3.3,2.6-7.4,4.3-11.6,4.9L179.4,216.6z"
        />
        <path
          class="st6"
          d="M181.6,228.8c1.9-0.6,3.8-1.5,5.5-2.5c1.7-1,3.3-2.2,4.7-3.6c1.2-1.4,2.3-3,3.2-4.7c1-1.7,1.9-3.5,2.7-5.3h0.3
     c0.5,2.2,0.3,4.4-0.6,6.5c-0.9,2-2.4,3.8-4.2,5.1c-3.3,2.6-7.3,4.3-11.6,4.9L181.6,228.8z"
        />
        <path
          class="st6"
          d="M181.7,242.1c1.9-0.6,3.8-1.5,5.5-2.5c1.7-1,3.3-2.2,4.7-3.6c1.3-1.4,2.3-3,3.2-4.7c1-1.7,1.9-3.5,2.7-5.3h0.3
     c0.5,2.2,0.3,4.4-0.6,6.5c-0.9,2-2.4,3.8-4.2,5.1c-3.3,2.6-7.3,4.3-11.6,4.9L181.7,242.1z"
        />
        <path
          class="st6"
          d="M186.5,386.4c-0.7,0.2-1.4,0.2-2.1,0l-2.4-0.6c-1.9-0.5-3.5-2.1-3.5-3.7l1.4-88.4c0.6-0.2,1.3-0.4,1.9-0.6
     l-1.4,89c0,1.6,1.5,3.3,3.5,3.8l2.4,0.6C186.4,386.4,186.5,386.4,186.5,386.4z"
        />
        <path
          class="st6"
          d="M148.7,197.6L148.7,197.6l-28.3,35.2l-11,13.8c-2.3-0.4-4.4-1.8-5.7-3.7l-3.4-4.8L54,172.3
     c-0.1-0.2-0.2-0.4-0.3-0.7c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4,0.1-0.5c0.1-0.4,0.3-0.8,0.5-1.2
     c0-0.1,0.1-0.2,0.2-0.3c-0.1,0.6,0.1,1.2,0.4,1.6L101,236l3.4,4.8c1.4,1.9,3.4,3.3,5.7,3.7l11.1-13.8l27.2-34.1
     C148.5,196.9,148.6,197.3,148.7,197.6z"
        />
        <path
          class="st6"
          d="M208,259.7c0.9,0.5,1.9,0.9,3,1.1c-1.1,0-2.3-0.2-3.3-0.6l-0.6-0.3c-0.2-0.1-0.4-0.2-0.5-0.3
     c-2.8-1.6-4.4-4.3-3.5-6.1l2.3-4.4l15.7-30.5l-16.1-22c0.1-0.5,0.2-0.9,0.3-1.4l17.2,23.4l-16.5,32.1l-1.4,2.7
     c-0.9,1.7,0.6,4.3,3.3,5.9L208,259.7z"
        />
        <path
          class="st6"
          d="M164.8,386.5h-0.1c-2,0.4-3.8-0.4-4-2l-15.9-96.6c-1.2-7.4-0.6-15,1.4-20.4c0.4,0.9,0.8,1.8,1.2,2.7
     c-1.4,5.8-1.6,11.8-0.6,17.7l15.9,96.6C162.9,385.6,163.8,386.3,164.8,386.5z"
        />
        <ellipse transform="matrix(0.9423 -0.3348 0.3348 0.9423 -4.0435 74.6672)" class="st3" cx="214.6" cy="49.1" rx="1.8" ry="4.2" />
      </g>
      <g>
        <g id="alien-sign">
          <path
            class="st8"
            d="M59.1,93.2h2.3c0.4,0,0.7,0.3,0.7,0.7v103.4c0,0.4-0.3,0.7-0.7,0.7h-2.3c-0.4,0-0.7-0.3-0.7-0.7V93.9
         C58.4,93.6,58.7,93.2,59.1,93.2z"
          />
          <circle id="alien-sign-circle" class="st9" cx="58.4" cy="58.4" r="58.4" />
        </g>
        <text transform="matrix(1 0 0 1 32.4877 70.4901)" id="queueText" class="st10 st11">
          {props.queue}
        </text>
      </g>
    </svg>
  );
}

{
  /* <style type="text/css">
 .st0{fill:#E7E2DE;}
 .st1{fill:#2A2F42;}
 .st2{fill:#E7E0DA;}
 .st3{fill:#CCC0B0;}
 .st4{fill:#DAD1C5;}
 .st5{fill:#B6ACA3;}
 .st6{fill:#D5CCC5;}
 .st7{fill:#CAC1BA;}
 .st8{fill:#7F7F7F;}
 .st9{fill:#F39200;}
 .st10{font-family:'MyriadPro-Regular';}
 .st11{font-size:51.7628px;}
</style> */
}
