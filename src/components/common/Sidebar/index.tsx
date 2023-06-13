import {
  Box,
  Button,
  Drawer,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import Accordion from "./Accordion";
import { menu } from "./menu";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar: FunctionComponent<IProps> = ({ open, onClose }) => {
  const router = useRouter();
  return (
    <Box sx={{}}>
      <Drawer
        hideBackdrop
        variant="persistent"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: "220px" },
            backgroundColor: "#f8f8fa",
            backgroundImage: "none",
            top: "60px",
            border: "none",
          },
        }}
      >
        <Box py={1}>
          <Box display="flex" gap={1} flexDirection="column">
            {menu.map((item, idx) => {
              return !item.items ? (
                <MuiLink
                  key={idx}
                  component={Link}
                  href={item.href}
                  underline="none"
                  color={router.route === item.href ? "#7d83f4" : "#a8a8a8"}
                  sx={{
                    "*": {
                      fill: router.route === item.href ? "#7d83f4" : "#a8a8a8",
                    },
                    ":hover": {
                      color: "#7d83f4",
                      "*": {
                        fill: "#7d83f4",
                      },
                    },
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    py: 1.5,
                    px: 3,
                  }}
                >
                  <item.Icon />
                  <Typography fontSize={14}>{item.title}</Typography>
                </MuiLink>
              ) : (
                <Accordion
                  title={item.title}
                  Icon={item.Icon}
                  items={item.items}
                />
              );
            })}
          </Box>
          <Box mt={2} px={2} display="flex" flexDirection="column" gap={2}>
            <Button
              variant="text"
              sx={{
                backgroundColor: "#7d83f4",
                width: { xs: 190 },
                py: 1,
                fontSize: 14,
                color: "#fff",
                ":hover": {
                  backgroundColor: "#7678f0 !important",
                },
                fontWeight: 400,
              }}
              component={Link}
              href="#"
            >
              Go to web app
            </Button>
            <Button
              variant="text"
              sx={{
                backgroundColor: "#7d83f4",
                width: { xs: 190 },
                py: 1,
                fontSize: 14,
                color: "#fff",
                ":hover": {
                  backgroundColor: "#7678f0 !important",
                },
                fontWeight: 400,
              }}
              component={Link}
              href="#"
            >
              Download mobile app
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
