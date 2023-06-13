import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Link as MuiLink } from "@mui/material";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ExternalLinkIcon from "components/icons/ExternalLinkIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    position: "absolute",
    right: 10,
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

interface IProps {
  title: string;
  Icon: React.FunctionComponent;
  items: { title: string; isExternal?: boolean; href: string }[];
}

const Accordion: React.FunctionComponent<IProps> = ({ title, items, Icon }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const router = useRouter();

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: 20 }} />}
          sx={{
            ":hover": {
              "*": {
                color: "#7d83f4",
                fill: "#7d83f4",
              },
            },
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Icon />
            <Typography color="#a8a8a8" fontSize={14}>
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            backgroundColor: "#f8f8fa",
            pl: 4,
          }}
        >
          {items.map((item, idx) => {
            return (
              <MuiLink
                target={item.isExternal && "_blank"}
                key={idx}
                component={Link}
                href={item.href}
                underline="none"
                color={router.route === item.href ? "#7d83f4" : "#a8a8a8"}
                sx={{
                  color: router.route === item.href ? "#7d83f4" : "#a8a8a8",
                  "*": {
                    stroke: router.route === item.href ? "#7d83f4" : "#a8a8a8",
                  },
                  ":hover": {
                    color: "#7d83f4",
                    "*": {
                      stroke: "#7d83f4",
                    },
                  },

                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Typography fontSize={13}>{item.title}</Typography>
                {item.isExternal && <ExternalLinkIcon />}
              </MuiLink>
            );
          })}
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default Accordion;
