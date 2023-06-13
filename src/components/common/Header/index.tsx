import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Hidden,
  IconButton,
  Link as MuiLink,
  TextField,
} from "@mui/material";
import Logo from "components/common/Logo";
import MobileNavbarDrawer from "components/common/MobileNavbarDrawer";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import type { ApplicationState } from "store";

export const Header = () => {
  const { t } = useTranslation("common");
  const { isAuth, profile } = useSelector(
    (state: ApplicationState) => state.user
  );

  const [isMobileNavbarDrawerOpen, setIsMobileNavbarDrawerOpen] =
    useState<boolean>(false);

  const handleSignOut = async () => {
    try {
      //
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Box
      component="header"
      sx={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <Box
        px={2}
        height="100%"
        flex={1}
        bgcolor="#fff"
        display="flex"
        alignItems="center"
      >
        <TextField
          placeholder="Search by email, mobile number or transaction id"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: "#a5a4bf" }} />,
          }}
          fullWidth
        />
        <Box display="flex" alignItems="center">
          {isAuth ? (
            <Box display="flex" alignItems="center" gap={1} ml={1}>
              <MuiLink href="/profile" component={Link} display="flex">
                <Image
                  style={{ borderRadius: "50%" }}
                  src={profile?.image}
                  width={30}
                  height={30}
                  alt=""
                />
              </MuiLink>
              <Button onClick={() => handleSignOut()} variant="text">
                {t("signOut")}
              </Button>
            </Box>
          ) : (
            <Button variant="text" component={Link} href="/auth/sign-in">
              {t("signIn")}
            </Button>
          )}

          <Hidden smUp>
            <IconButton
              onClick={() => setIsMobileNavbarDrawerOpen((prev) => !prev)}
            >
              {!isMobileNavbarDrawerOpen ? (
                <MenuIcon fontSize="large" />
              ) : (
                <CloseIcon fontSize="large" />
              )}
            </IconButton>
          </Hidden>
        </Box>
        <MobileNavbarDrawer
          isDrawer={isMobileNavbarDrawerOpen}
          setIsDrawer={setIsMobileNavbarDrawerOpen}
        />
      </Box>
    </Box>
  );
};
