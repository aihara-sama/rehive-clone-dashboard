import { Button } from "@mui/material";
import type { FunctionComponent } from "react";

interface IRoundedButtonProps {
  text: string;
  disabled?: boolean;
}

const SecondaryButton: FunctionComponent<IRoundedButtonProps> = ({ text }) => {
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
        fontSize: 14,
        ":hover": {
          borderColor: "#d2d2d7",
        },
        ":active": {
          color: "#707070",
          backgroundColor: "#00000033",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
