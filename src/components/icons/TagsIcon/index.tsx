import type { FunctionComponent } from "react";

interface ITagsIconProps {}

const TagsIcon: FunctionComponent<ITagsIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#6a6fcf"
      width="14px"
      height="14px"
      viewBox="0 0 32 32"
      version="1.1"
    >
      <title>tags</title>
      <path d="M25.994 16.144l-12.225-12.225-11.769 0.045 0.018 10.831 12.662 12.662c0.794 0.795 2.072 0.806 2.854 0.024l8.484-8.485c0.781-0.781 0.771-2.058-0.024-2.852zM7.081 10.952c-1.104 0-2-0.896-2-2s0.896-2 2-2c1.105 0 2 0.896 2 2s-0.895 2-2 2zM28.846 16.168l-12.225-12.225-1.471 0.005 12.27 12.207c0.795 0.795 0.805 2.071 0.023 2.853l-8.484 8.485c-0.207 0.207-0.451 0.354-0.709 0.451 0.721 0.277 1.561 0.135 2.135-0.438l8.486-8.485c0.781-0.782 0.77-2.059-0.025-2.853z" />
    </svg>
  );
};

export default TagsIcon;