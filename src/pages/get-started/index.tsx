import {
  Box,
  Button,
  Divider,
  Hidden,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import RoundedButton from "components/common/Buttons/RoundedButton";
import { Layout } from "components/common/Layout";
import AppleIcon from "components/icons/AppleIcon";
import BookIcon from "components/icons/BookIcon";
import BookReaderIcon from "components/icons/BookReaderIcon";
import BoxIcon from "components/icons/BoxIcon";
import BriefcaseIcon from "components/icons/BriefcaseIcon";
import CHecklistIcon from "components/icons/Checklist";
import EnvelopeIcon from "components/icons/EnvelopeIcon";
import FileCootcactIcon from "components/icons/FileContractIcon";
import GoogleIcon from "components/icons/GoogleIcon";
import HandsHelpingIcon from "components/icons/HandsHelpingIcon";
import IdCardIon from "components/icons/IdCardIcon";
import InfoIcon from "components/icons/InfoIcon";
import NOtesMedicalIcon from "components/icons/NotesMedicalIcon";
import NotificationsIcon from "components/icons/NotificationsIcon";
import PaletteIcon from "components/icons/PaletteIcon";
import QuestionIcon from "components/icons/QuestionIcon";
import StarIcon from "components/icons/StarIcon";
import TagsIcon from "components/icons/TagsIcon";
import UserCogIcon from "components/icons/UserCogIcon";
import VialIcon from "components/icons/VialIcon";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const GetStartedPage = () => {
  return (
    <Layout>
      <Box ml={{ xs: 0, lg: "220px" }} py={3} px={5}>
        <Box display="flex" gap={5} flexDirection={{ xs: "column", md: "row" }}>
          <Box flexBasis={{ xs: "65%", xl: "50%" }}>
            <Box>
              <Box>
                <Typography color="#4c4a51" fontSize={22} fontWeight={700}>
                  Get Started
                </Typography>
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", md: "row" }}
                  gap={5}
                  alignItems="start"
                >
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      marginBottom: "30px",
                      py: 3,
                      px: 3,
                      mt: 3,
                    }}
                  >
                    <Typography color="#022b36" fontSize={20}>
                      Learn some basiscs
                    </Typography>
                    <Typography mt={2} mb={3} color="#022b36" fontSize={14}>
                      Welcome to Rehive!
                    </Typography>
                    <Typography fontSize={14}>
                      This is your test project, which acts like a sandbox where
                      you can experiment with settings and configurations for
                      your app. Below we&apos;ve outlined some basics to get you
                      familiar with Rehive and what we can do.
                    </Typography>
                    <Box>
                      <Box display="flex" gap={5} mt={2}>
                        <Typography
                          mb={1.5}
                          color="#7d83f4"
                          fontSize={20}
                          fontWeight={600}
                        >
                          1
                        </Typography>
                        <Typography
                          color="#7d83f4"
                          fontSize={20}
                          fontWeight={600}
                        >
                          Create a test user
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        gap={3}
                        alignItems={{
                          xs: "start",
                          sm: "center",
                          md: "start",
                          lg: "center",
                        }}
                        flexDirection={{
                          xs: "column",
                          sm: "row",
                          md: "column",
                          lg: "row",
                        }}
                      >
                        <Typography fontSize={14} flex={1}>
                          Register a test user and go through the KYC process as
                          a user in the Web Wallet App.
                        </Typography>
                        <RoundedButton
                          text="Learn how"
                          color="#7d83f4"
                          Icon={<BookReaderIcon color="#7d83f4" />}
                        />
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "#eee", my: 3 }} />
                    <Box>
                      <Box display="flex" gap={5} mt={2}>
                        <Typography
                          mb={1.5}
                          color="#f0518a"
                          fontSize={20}
                          fontWeight={600}
                        >
                          2
                        </Typography>
                        <Typography
                          color="#f0518a"
                          fontSize={20}
                          fontWeight={600}
                        >
                          Verify your user&apos;s KYC docs
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        gap={3}
                        alignItems={{
                          xs: "start",
                          sm: "center",
                          md: "start",
                          lg: "center",
                        }}
                        flexDirection={{
                          xs: "column",
                          sm: "row",
                          md: "column",
                          lg: "row",
                        }}
                      >
                        <Typography flex={1} fontSize={14}>
                          Great! You have a test user. Here you&apos;ll learn
                          how to verify their KYC documents manually in the
                          Admin Dashboard.
                        </Typography>
                        <RoundedButton
                          text="Learn how"
                          color="#f0518a"
                          Icon={<BookReaderIcon color="#f0518a" />}
                        />
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "#eee", my: 3 }} />
                    <Box>
                      <Box display="flex" gap={5} mt={2}>
                        <Typography
                          mb={1.5}
                          color="#34ceea"
                          fontSize={20}
                          fontWeight={600}
                        >
                          3
                        </Typography>
                        <Typography
                          color="#34ceea"
                          fontSize={20}
                          fontWeight={600}
                        >
                          Create a manual deposit
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        gap={3}
                        alignItems={{
                          xs: "start",
                          sm: "center",
                          md: "start",
                          lg: "center",
                        }}
                        flexDirection={{
                          xs: "column",
                          sm: "row",
                          md: "column",
                          lg: "row",
                        }}
                      >
                        <Typography flex={1} fontSize={14}>
                          Create a manual deposit for your test user to see how
                          manual cash in/out works without any integrations.
                        </Typography>
                        <RoundedButton
                          text="Learn how"
                          color="#34ceea"
                          Icon={<BookReaderIcon color="#34ceea" />}
                        />
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "#eee", my: 3 }} />
                    <Box>
                      <Box display="flex" gap={5} mt={2}>
                        <Typography
                          mb={1.5}
                          color="#7d83f4"
                          fontSize={20}
                          fontWeight={600}
                        >
                          4
                        </Typography>
                        <Typography
                          color="#7d83f4"
                          fontSize={20}
                          fontWeight={600}
                        >
                          Purchase a test product
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        gap={3}
                        alignItems={{
                          xs: "start",
                          sm: "center",
                          md: "start",
                          lg: "center",
                        }}
                        flexDirection={{
                          xs: "column",
                          sm: "row",
                          md: "column",
                          lg: "row",
                        }}
                      >
                        <Typography flex={1} fontSize={14}>
                          Now that your user has some test funds, purchase a
                          demo product in the web app and view the transation as
                          an admin in the Admin dashboard.
                        </Typography>
                        <RoundedButton
                          text="Learn how"
                          color="#7d83f4"
                          Icon={<BookReaderIcon color="#7d83f4" />}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Hidden xlUp>
              <Box
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  py: 3,
                  px: 3,
                  mb: 3,
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography color="#707070" fontSize={20}>
                      App ID
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <IdCardIon />
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="#707070"
                      >
                        my_app_test
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography color="#707070" fontSize={20}>
                      Project Type
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <VialIcon />
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="#707070"
                      >
                        Test
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#7d83f4",
                  py: 3,
                  px: 3,
                  mt: { xs: 3 },
                  mb: { xs: 3 },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography color="#fff" fontSize={20}>
                      Trial
                    </Typography>
                    <Typography color="#fff" fontSize={12}>
                      Your 14-day free trial is ongoing and will end on Jun 26,
                      2023
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff !important",
                      borderColor: "#fff !important",
                      ":active, :hover": {
                        backgroundColor: "#6a6fcf",
                      },
                      whiteSpace: "nowrap",
                    }}
                  >
                    Select a plan
                  </Button>
                </Box>
              </Box>
            </Hidden>

            <Hidden mdUp>
              <Typography mb={3} color="#4c4a51" fontSize={22} fontWeight={700}>
                Customization and admin
              </Typography>
              <Box
                display="flex"
                gap={2}
                flexDirection={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                  xl: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Branding</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="settings/company-info"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <StarIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add your company info and logo
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="extensions/app/app-config?showConfig=colors"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <PaletteIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add your company colors
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="/extensions/app/app-config?showConfig=cards"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <BoxIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add welcome cards
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="/extensions/notifications/list"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <NotificationsIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Customize notifications
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Action points</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="/account-info"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#ed675a",
                          "*": {
                            fill: "#ed675a",
                          },
                        },
                      }}
                      underline="none"
                      color="#ed675a"
                    >
                      <EnvelopeIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Verify your email address
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#ed675a",
                          "*": {
                            fill: "#ed675a",
                          },
                        },
                      }}
                      underline="none"
                      color="#ed675a"
                    >
                      <InfoIcon color="#ed675a" />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Accept latest terms
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="/extensions/app/app-config?showConfig=cards"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <FileCootcactIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Software license agreement
                      </Typography>
                      <InfoIcon color="#6a6fcf" />
                    </MuiLink>
                  </Box>
                </Box>
              </Box>

              <Box
                mt={2}
                display="flex"
                gap={2}
                flexDirection={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                  xl: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, lg: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Web app</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="/extensions/app/app-domain"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <InfoIcon color="#7d83f4" />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add your domain
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Android & iOS app</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#6a6fcf"
                    >
                      <AppleIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Create Apple dev account
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <GoogleIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Create Google Play dev account
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <CHecklistIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Checklist of required info
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <Typography ml={0.3} fontSize={14} fontWeight={500}>
                        T
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Provide white-label app info
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
              <Typography
                mt={3}
                mb={3}
                color="#4c4a51"
                fontSize={22}
                fontWeight={700}
              >
                Help and shortcuts
              </Typography>
              <Box
                display="flex"
                gap={2}
                flexDirection={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                  xl: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Developers</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <TagsIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        API tokens
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <BoxIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Request logs
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <HandsHelpingIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Webhooks
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <NOtesMedicalIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Status page
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Help</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#6a6fcf"
                    >
                      <BookIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Rehive Help Center
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <Box
                        width={22}
                        height={22}
                        sx={{ maxWidth: "100%", ml: "-4px" }}
                        component="img"
                        src="/images/_defaultIcon.png"
                      />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add Rehive admins
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <UserCogIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Contact support
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
            </Hidden>
            <Typography
              mt={{ xs: 3, xl: 0 }}
              color="#4c4a51"
              fontSize={22}
              fontWeight={700}
            >
              Go to Production
            </Typography>
            <Box
              display="flex"
              gap={5}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Box
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  marginBottom: "30px",
                  py: 3,
                  px: 3,
                  mt: 3,
                }}
              >
                <Typography color="#022b36" fontSize={20}>
                  Get ready for Production
                </Typography>
                <Typography mt={2} mb={2} color="#022b36" fontSize={14}>
                  When you&apos;re happy with your test configurations and are
                  ready to go to Production, you can create your Production
                  Project below.
                </Typography>
                <Typography fontSize={14}>
                  Ensure that you&apos;ve followed all the steps in the Get
                  Started block above.
                </Typography>
                <Box>
                  <Box display="flex" gap={5} mt={3}>
                    <Typography color="#7d83f4" fontSize={20} fontWeight={600}>
                      1
                    </Typography>
                    <Typography color="#7d83f4" fontSize={20} fontWeight={600}>
                      Create a Production Project
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    mt={1}
                    gap={3}
                    alignItems={{
                      xs: "start",
                      sm: "center",
                      md: "start",
                      lg: "center",
                    }}
                    flexDirection={{
                      xs: "column",
                      sm: "row",
                      md: "column",
                      lg: "row",
                    }}
                  >
                    <Typography flex={1} fontSize={14}>
                      Read through Rehive&apos;s go-live checklist to make sure
                      you have everything you need.
                    </Typography>
                    <RoundedButton
                      text="Create production"
                      color="#7d83f4"
                      disabled
                      Icon={<BriefcaseIcon />}
                    />
                  </Box>
                  <Typography mt={1} color="#ed675a" fontSize={12}>
                    You need to be on Standard plan or higher before you can
                    create a Production Project.
                  </Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <CHecklistIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Go live checklist
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <QuestionIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        How to go live
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            flexBasis={{ xs: "35%", xl: "50%" }}
            sx={{
              marginBottom: "30px",
            }}
          >
            <Hidden xlDown>
              <Box
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  py: 3,
                  px: 3,
                  mt: { xs: 0, md: 7 },
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography color="#707070" fontSize={20}>
                      App ID
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <IdCardIon />
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="#707070"
                      >
                        my_app_test
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography color="#707070" fontSize={20}>
                      Project Type
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <VialIcon />
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="#707070"
                      >
                        Test
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#7d83f4",
                  py: 3,
                  px: 3,
                  mt: { xs: 0, md: 3 },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Typography color="#fff" fontSize={20}>
                      Trial
                    </Typography>
                    <Typography color="#fff" fontSize={12}>
                      Your 14-day free trial is ongoing and will end on Jun 26,
                      2023
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff !important",
                      borderColor: "#fff !important",
                      ":active, :hover": {
                        backgroundColor: "#6a6fcf",
                      },
                      whiteSpace: "nowrap",
                    }}
                  >
                    Select a plan
                  </Button>
                </Box>
              </Box>
            </Hidden>

            <Hidden mdDown>
              <Typography
                mt={{ xs: 7, xl: 2 }}
                color="#4c4a51"
                fontSize={22}
                fontWeight={700}
              >
                Customization and admin
              </Typography>
              <Box
                display="flex"
                gap={{ xs: 0, xl: 2 }}
                flexDirection={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                  xl: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Branding</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="settings/company-info"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <StarIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add your company info and logo
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="extensions/app/app-config?showConfig=colors"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <PaletteIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add your company colors
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="/extensions/app/app-config?showConfig=cards"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <BoxIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add welcome cards
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="/extensions/notifications/list"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <NotificationsIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Customize notifications
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Action points</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="/account-info"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#ed675a",
                          "*": {
                            fill: "#ed675a",
                          },
                        },
                      }}
                      underline="none"
                      color="#ed675a"
                    >
                      <EnvelopeIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Verify your email address
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#ed675a",
                          "*": {
                            fill: "#ed675a",
                          },
                        },
                      }}
                      underline="none"
                      color="#ed675a"
                    >
                      <InfoIcon color="#ed675a" />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Accept latest terms
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="/extensions/app/app-config?showConfig=cards"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <FileCootcactIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Software license agreement
                      </Typography>
                      <InfoIcon color="#6a6fcf" />
                    </MuiLink>
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                gap={{ xs: 0, xl: 2 }}
                flexDirection={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                  xl: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, lg: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Web app</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="/extensions/app/app-domain"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <InfoIcon color="#7d83f4" />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add your domain
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Android & iOS app</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#6a6fcf"
                    >
                      <AppleIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Create Apple dev account
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <GoogleIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Create Google Play dev account
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <CHecklistIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Checklist of required info
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <Typography ml={0.3} fontSize={14} fontWeight={500}>
                        T
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Provide white-label app info
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
              <Typography mt={3} color="#4c4a51" fontSize={22} fontWeight={700}>
                Help and shortcuts
              </Typography>
              <Box
                display="flex"
                gap={{ xs: 0, xl: 2 }}
                flexDirection={{
                  xs: "column",
                  sm: "row",
                  md: "column",
                  xl: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Developers</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <TagsIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        API tokens
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <BoxIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Request logs
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <HandsHelpingIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Webhooks
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <NOtesMedicalIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Status page
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    py: 3,
                    px: 3,
                    mt: { xs: 0, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography fontSize={20}>Help</Typography>
                  <Box mt={3} display="flex" flexDirection="column" gap={1}>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#6a6fcf"
                    >
                      <BookIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Rehive Help Center
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <Box
                        width={22}
                        height={22}
                        sx={{ maxWidth: "100%", ml: "-4px" }}
                        component="img"
                        src="/images/_defaultIcon.png"
                      />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Add Rehive admins
                      </Typography>
                    </MuiLink>
                    <MuiLink
                      component={Link}
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color .2s ease",
                        ":hover": {
                          color: "#6a6fcf",
                          "*": {
                            fill: "#6a6fcf",
                          },
                        },
                      }}
                      underline="none"
                      color="#7d83f4"
                    >
                      <UserCogIcon />
                      <Typography
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        Contact support
                      </Typography>
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default GetStartedPage;
