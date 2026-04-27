import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  const allSegments = location.pathname.split("/").filter((x) => x);
  const pathnames = allSegments.filter((x) => isNaN(x));

  const textStyle = {
    fontWeight: 700,
    fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "18px" },
    lineHeight: 1.4,
    display: "flex",
    alignItems: "center",
    color: "#071b3f",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 65, sm: 70, md: 82 },
        left: 0,
        width: "100%",
        backgroundColor: "#f0cd7c",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        py: { xs: 1.5, sm: 2, md: 2 },
        zIndex: 1200,
      }}
    >
      <Box sx={{ maxWidth: "1440px", mx: "auto", px: { xs: "16px", sm: "5%" } }}>
        <MUIBreadcrumbs
          separator={
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "18px" },
                lineHeight: 1.4,
                display: "flex",
                alignItems: "center",
                color: "#071b3f",
                opacity: 0.8
              }}
              aria-hidden="true"
            >
              &gt;
            </Typography>
          }
          sx={{
            "& .MuiBreadcrumbs-ol": {
              alignItems: "center",
              flexWrap: "nowrap",
            },
            "& .MuiBreadcrumbs-separator": {
              color: "#071b3f !important",
            },
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              ...textStyle,
              textDecoration: "none",
              transition: "0.2s",
              "&:hover": { letterSpacing: "2px", },
            }}
          >
            Home
          </Typography>

          {pathnames.map((value, index) => {
            const segmentIndex = allSegments.indexOf(value);
            const to = `/${allSegments.slice(0, segmentIndex + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const formatted = value
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <Typography
                key={to}
                component={isLast ? "span" : RouterLink}
                to={isLast ? undefined : to}
                sx={{
                  ...textStyle,
                  textDecoration: "none",
                  color: "#071b3f",
                  fontWeight: isLast ? 700 : 500,
                  cursor: isLast ? "default" : "pointer",
                  "&:hover": {
                    opacity: isLast ? 1 : 0.7,
                  },
                }}
              >
                {formatted}
              </Typography>
            );
          })}
        </MUIBreadcrumbs>
      </Box>
    </Box>
  );
}

export default Breadcrumbs;