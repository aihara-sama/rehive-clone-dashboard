import { Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
  return (
    <MuiLink
      component={Link}
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 220,
        backgroundColor: "#f0f0f7",
      }}
      underline="none"
      color="inherit"
    >
      <Box
        component="img"
        src="/images/logo.png"
        maxWidth="100%"
        width={160}
        height={70}
        sx={{
          margin: "0 auto",
        }}
      />
    </MuiLink>
  );
};

export default Logo;
