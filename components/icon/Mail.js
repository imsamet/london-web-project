import * as React from "react";

const SvgMail = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#mail_svg__a)">
      <path
        d="m35.972 2.592-4.5 29.186a2.25 2.25 0 0 1-3.09 1.735l-8.62-3.593-3.576 5.365c-.274.469-.731.715-1.224.715a1.461 1.461 0 0 1-1.462-1.462v-6.763c0-.5.167-.987.474-1.381L29.25 6.75 8.6 25.334l-7.216-3.01c-.79-.33-1.327-1.076-1.38-1.997-.052-.92.385-1.668 1.13-2.093L32.633.297a2.248 2.248 0 0 1 3.338 2.295Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="mail_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMail;
