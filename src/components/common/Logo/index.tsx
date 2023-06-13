import { Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
  return (
    <MuiLink
      component={Link}
      href="/"
      sx={{ display: "flex", alignItems: "center" }}
      underline="none"
      color="inherit"
    >
      <Box
        component="img"
        src="/images/logo.png"
        maxWidth="100%"
        width={160}
        height={70}
      />
    </MuiLink>
  );
};

export default Logo;
