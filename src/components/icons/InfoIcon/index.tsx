import type { FunctionComponent } from "react";

interface IInfoIconProps {
  color: string;
}

const InfoIcon: FunctionComponent<IInfoIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
    >
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM12,8a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,8Z" />
    </svg>
  );
};

export default InfoIcon;
