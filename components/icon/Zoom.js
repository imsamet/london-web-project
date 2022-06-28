import * as React from "react";

const SvgZoom = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#zoom_svg__a)">
      <path
        d="m35.177 31.198-8.416-8.417c1.914-2.841 2.858-6.391 2.352-10.174C28.252 6.173 22.978.937 16.537.121 6.962-1.09-1.09 6.961.121 16.538c.816 6.443 6.053 11.72 12.488 12.578 3.783.506 7.333-.438 10.174-2.352l8.416 8.416a2.813 2.813 0 0 0 3.978 0 2.82 2.82 0 0 0 0-3.982ZM5.562 14.625c0-4.963 4.037-9 9-9 4.962 0 9 4.037 9 9s-4.038 9-9 9c-4.963 0-9-4.036-9-9Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="zoom_svg__a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgZoom;
