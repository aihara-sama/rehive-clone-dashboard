import { Button } from "@mui/material";
import type { FunctionComponent } from "react";

interface IRoundedButtonProps {
  text: string;
  disabled?: boolean;
  direction: "Previous" | "Next";
}

const PaginationButton: FunctionComponent<IRoundedButtonProps> = ({
  disabled,
  direction,
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        ...(direction === "Next"
          ? {
              borderTopRightRadius: "5px",
              borderBOttomRightRadius: "5px",
            }
          : {
              borderTopLeftRadius: "5px",
              borderBOttomLeftRadius: "5px",
            }),
        px: "10px",
        py: "5px",
        color: "#707070",
        border: `1px solid #ddd`,
        backgroundColor: disabled ? "#bdbdbd" : "transparent",
        fontSize: 12,
        ":hover": {
          borderColor: "#7d83f4",
          color: "#7d83f4",
        },
        cursor: disabled ? "default" : "pointer",
      }}
    >
      {direction}
    </Button>
  );
};

export default PaginationButton;
