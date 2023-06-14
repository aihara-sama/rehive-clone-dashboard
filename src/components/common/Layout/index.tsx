import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

import { Header } from "../Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box component="main" height="100%">
      <Header />
      <Box mt="60px" component="section">
        {children}
      </Box>
    </Box>
  );
};
