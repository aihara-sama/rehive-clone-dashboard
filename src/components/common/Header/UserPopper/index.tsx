import { Box, Link as MuiLink, Paper, Popper, Typography } from "@mui/material";
import ExitIcon from "components/icons/ExitIcon";
import KeyIcon from "components/icons/KeyIcon";
import ProfileIcon from "components/icons/ProfileIcoin";
import UserIcon from "components/icons/UserIcon";
import Link from "next/link";
import { useState, type FunctionComponent } from "react";
import { useSelector } from "react-redux";
import type { ApplicationState } from "store";

interface IUserPopperProps {
  el: JSX.Element;
}

const UserPopper: FunctionComponent<IUserPopperProps> = ({ el }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { profile } = useSelector((state: ApplicationState) => state.user);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div onClick={handleClick}>
      {el}
      <Popper
        popperOptions={{
          placement: "bottom-end",
        }}
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorEl}
      >
        <Paper
          elevation={5}
          sx={{
            marginLeft: "42px",
            marginTop: "10px",
            backgroundColor: "#fff",
            width: 280,
          }}
        >
          <Box height={50} bgcolor="#f0f0f7"></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mt: "-16px",
                svg: {
                  borderRadius: "50%",
                  border: "2px solid #fff",
                },
              }}
            >
              <UserIcon />
            </Box>
          </Box>
          <Box mt={1}>
            <Typography color="#707070" fontSize={14} textAlign="center">
              {profile.email}
            </Typography>
            <Typography
              mt={1}
              fontWeight={600}
              color="#707070"
              fontSize={14}
              textAlign="center"
            >
              my_app_test
            </Typography>
          </Box>
          <Box pb={1} mt={2} display="flex" flexDirection="column">
            <MuiLink
              component={Link}
              href="/authentication/multi-factor"
              sx={{
                py: 1,
                px: 2,
                ":hover": {
                  backgroundColor: "#ececec",
                },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              underline="none"
              color="inherit"
            >
              <KeyIcon />
              <Typography sx={{ fontSize: 14 }}>Enable 2FA</Typography>
            </MuiLink>
            <MuiLink
              component={Link}
              href="/account-info"
              sx={{
                py: 1,
                px: 2,
                ":hover": {
                  backgroundColor: "#ececec",
                },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              underline="none"
              color="inherit"
            >
              <ProfileIcon />
              <Typography sx={{ fontSize: 14 }}>Manage Profile</Typography>
            </MuiLink>
            <MuiLink
              component={Link}
              href="#"
              sx={{
                py: 1,
                px: 2,
                ":hover": {
                  backgroundColor: "#ececec",
                },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              underline="none"
              color="inherit"
            >
              <ExitIcon />
              <Typography sx={{ fontSize: 14 }}>Log out</Typography>
            </MuiLink>
          </Box>
        </Paper>
      </Popper>
    </div>
  );
};

export default UserPopper;
