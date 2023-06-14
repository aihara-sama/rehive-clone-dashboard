import type { FunctionComponent } from "react";

interface IIdCardIonProps {}

const IdCardIon: FunctionComponent<IIdCardIonProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#7d83f4"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM8.715 8c1.151 0 2 .849 2 2s-.849 2-2 2-2-.849-2-2 .848-2 2-2zm3.715 8H5v-.465c0-1.373 1.676-2.785 3.715-2.785s3.715 1.412 3.715 2.785V16zM19 15h-4v-2h4v2zm0-4h-5V9h5v2z" />
    </svg>
  );
};

export default IdCardIon;
