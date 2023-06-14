import { Button } from "@mui/material";
import type { FunctionComponent } from "react";

interface IRoundedButtonProps {
  text: string;
  Icon: JSX.Element;
  color: string;
  disabled?: boolean;
}

const RoundedButton: FunctionComponent<IRoundedButtonProps> = ({
  Icon,
  text,
  color,
  disabled,
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        transition: "none",
        whiteSpace: "nowrap",
        py: "10px",
        px: "12px",
        color,
        border: `2px solid ${color} !important`,
        borderRadius: "25px",
        fontSize: 14,
        lineHeight: 1.35,
        fontWeight: 500,
        position: "static",
        opacity: disabled ? 0.65 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        "&": {
          fill: color,
        },
        ":hover": {
          backgroundColor: color,
          color: "#fff",
          svg: {
            fill: "#fff",
          },
        },
      }}
      endIcon={Icon}
    >
      {text}
    </Button>
  );
};

export default RoundedButton;
