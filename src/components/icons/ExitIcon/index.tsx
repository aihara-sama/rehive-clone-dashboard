import type { FunctionComponent } from "react";

interface IExitIcoinProps {}

const ExitIcon: FunctionComponent<IExitIcoinProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_429_11067)">
        <path
          d="M15 4.00098H5V18.001C5 19.1055 5.89543 20.001 7 20.001H15"
          stroke="#022b36"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 15.001L19 12.001M19 12.001L16 9.00098M19 12.001H9"
          stroke="#022b36"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11067">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ExitIcon;
