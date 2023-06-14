import type { FunctionComponent } from "react";

interface IEnvelopeIconProps {}

const EnvelopeIcon: FunctionComponent<IEnvelopeIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ed675a"
      width="14px"
      height="14px"
      viewBox="0 -5 32 32"
      preserveAspectRatio="xMidYMid"
    >
      <path d="M29.000,22.000 L3.000,22.000 C1.346,22.000 -0.000,20.654 -0.000,19.000 L-0.000,3.000 C-0.000,1.346 1.346,-0.000 3.000,-0.000 L29.000,-0.000 C30.654,-0.000 32.000,1.346 32.000,3.000 L32.000,19.000 C32.000,20.654 30.654,22.000 29.000,22.000 ZM3.000,20.000 L29.000,20.000 C29.551,20.000 30.000,19.552 30.000,19.000 L30.000,3.317 L16.651,14.759 C16.463,14.920 16.232,15.000 16.000,15.000 C15.768,15.000 15.537,14.920 15.349,14.759 L2.000,3.317 L2.000,19.000 C2.000,19.552 2.449,20.000 3.000,20.000 ZM28.464,2.000 L3.536,2.000 L16.000,12.683 L28.464,2.000 Z" />
    </svg>
  );
};

export default EnvelopeIcon;
