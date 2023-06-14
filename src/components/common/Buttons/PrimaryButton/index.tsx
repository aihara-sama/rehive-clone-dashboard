import { Button } from "@mui/material";
import type { FunctionComponent } from "react";

interface IRoundedButtonProps {
  text: string;
  disabled?: boolean;
}

const PrimaryButton: FunctionComponent<IRoundedButtonProps> = ({
  text,
  disabled,
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        px: "12px",
        py: "6px",
        color: "#a8a8a8",
        border: `2px solid #eaeaef`,
        borderRadius: "3px",
        fontWeight: 500,
        backgroundColor: "#4e56f0",
        fontSize: 14,
        ":hover": {
          backgroundColor: "#4e56f0",
        },
        ":active": {
          backgroundColor: "#6a6fcf",
        },
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
