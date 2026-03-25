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
    fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
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
      <Box sx={{ maxWidth: "1350px", mx: "auto", px: { xs: "16px", sm: "5%" } }}>
        <MUIBreadcrumbs
          separator={
            <Typography sx={{ ...textStyle, opacity: 0.5 }} aria-hidden="true">&gt;</Typography>
          }
          sx={{
            "& .MuiBreadcrumbs-ol": {
              alignItems: "center",
              flexWrap: "nowrap",
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
              "&:hover": { opacity: 0.7 },
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
                  color: isLast ? "#071b3f" : "#071b3f",
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