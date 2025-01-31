import React from "react";

const LessThen = ({ color }) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 12.5L6.75 7L1.25 1.5"
        stroke={color}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LessThen;
