import type { FunctionComponent } from "react";

interface IStarIconProps {}

const StarIcon: FunctionComponent<IStarIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#7d83f4"
      width="14px"
      height="14px"
      viewBox="0 0 32 32"
      version="1.1"
    >
      <path d="M16 2.421l4.296 8.909 9.769 1.452-7.075 7.057 0.238 1.416 1.415 8.443-8.644-4.649-8.643 4.652 1.415-8.444 0.237-1.416-7.073-7.059 9.768-1.452 0.642-1.329zM15.999 0.486c-0.896 0-1.712 0.505-2.093 1.296l-3.622 7.52-8.335 1.239c-0.856 0.128-1.567 0.713-1.843 1.512-0.276 0.802-0.067 1.684 0.537 2.286l6.106 6.1-1.417 8.458c-0.143 0.852 0.226 1.707 0.949 2.206 0.397 0.273 0.864 0.411 1.332 0.411 0.385 0 0.77-0.093 1.119-0.281l7.266-3.912 7.266 3.912c0.349 0.187 0.735 0.281 1.118 0.281 0.468 0 0.934-0.138 1.333-0.411 0.722-0.498 1.091-1.353 0.947-2.206l-1.417-8.458 6.11-6.1c0.605-0.601 0.812-1.485 0.536-2.286s-0.988-1.385-1.843-1.512l-8.333-1.239-3.624-7.52c-0.378-0.791-1.195-1.295-2.093-1.295z" />
    </svg>
  );
};

export default StarIcon;
