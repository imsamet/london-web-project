import * as React from "react";

const SvgPhone = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#phone_svg__a)">
      <path
        d="m35.944 27.21-1.635 7.088a2.185 2.185 0 0 1-2.142 1.703C14.428 36 0 21.571 0 3.832c0-1.03.7-1.912 1.703-2.141L8.79.056a2.207 2.207 0 0 1 2.516 1.274l3.271 7.63a2.2 2.2 0 0 1-.631 2.562l-3.786 3.04a24.585 24.585 0 0 0 11.215 11.215l3.1-3.783a2.187 2.187 0 0 1 2.564-.631l7.629 3.27c.917.483 1.515 1.551 1.276 2.578Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="phone_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPhone;
