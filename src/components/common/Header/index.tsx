import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Hidden,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "components/common/Logo";
import ExportIcon from "components/icons/ExportIcon";
import UserIcon from "components/icons/UserIcon";
import VialIcon from "components/icons/VialIcon";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { ApplicationState } from "store";
import { Sidebar } from "../Sidebar";
import UserPopper from "./UserPopper";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { t } = useTranslation("common");
  const { isAuth, profile } = useSelector(
    (state: ApplicationState) => state.user
  );

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    setIsSidebarOpen(isLgUp);
  }, [isLgUp]);

  return (
    <Box
      bgcolor="#fff"
      component="header"
      sx={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        right: 0,
        left: 0,
        top: 0,
      }}
    >
      <Hidden lgDown>
        <Logo />
      </Hidden>
      <Hidden lgUp>
        <IconButton>
          {isSidebarOpen ? (
            <CloseIcon
              onClick={() => setIsSidebarOpen(false)}
              fontSize="large"
            />
          ) : (
            <MenuIcon onClick={() => setIsSidebarOpen(true)} fontSize="large" />
          )}
        </IconButton>
      </Hidden>
      <Box
        ml={{ xs: "5%", md: "0" }}
        px={2}
        height="100%"
        flex={1}
        display="flex"
        alignItems="center"
      >
        <TextField
          sx={{
            mr: { xs: "auto", md: 3 },
            width: { xs: "65%", md: "50%" },
            fieldset: {
              border: "1px solid #e7e7e7 !important",
            },
            input: {
              fontSize: 14,
            },
          }}
          placeholder="Search by email, mobile number or transaction id"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: "#a5a4bf" }} />,
          }}
        />
        <ExportIcon />
        <Hidden mdDown>
          <Box ml={5} mr={5} display="flex" alignItems="center" gap={1}>
            <VialIcon />
            <Typography
              whiteSpace="nowrap"
              color="#7d83f4"
              fontSize={14}
              fontWeight={500}
            >
              Test project
            </Typography>
          </Box>
        </Hidden>
        <Box ml={{ xs: "0", md: "auto" }} display="flex" alignItems="center">
          {isAuth ? (
            <UserPopper
              el={
                <Box display="flex" alignItems="center" gap={1} ml={1}>
                  <Hidden mdDown>
                    <Box display="flex" flexDirection="column" alignItems="end">
                      <Typography color="#707070" fontSize={14}>
                        {profile.email}
                      </Typography>
                      <Typography color="#707070" fontSize={14}>
                        my_app_test
                      </Typography>
                    </Box>
                  </Hidden>
                  <Box
                    p={0.5}
                    display="flex"
                    gap={1}
                    sx={{
                      cursor: "pointer",
                      borderRadius: "80px",
                      backgroundColor: "#f7f7f7",
                    }}
                    alignItems="center"
                  >
                    <UserIcon />
                    <ArrowDropDownIcon />
                  </Box>
                </Box>
              }
            />
          ) : (
            <Button variant="text" component={Link} href="/auth/sign-in">
              {t("signIn")}
            </Button>
          )}

          <Sidebar
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </Box>
      </Box>
    </Box>
  );
};
