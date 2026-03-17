import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const textStyle = {
    fontWeight: 700,
    fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
    lineHeight: 1.4, //  SAME everywhere = perfect alignment
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
        py: { xs: 1, sm: 1.2, md: 1.5, lg: 2 },
        zIndex: 1200,
      }}
    >
      <Box
        sx={{
          maxWidth: "1350px",
          mx: "auto",
          px: { xs: "16px", sm: "5%" },
        }}
      >
        <MUIBreadcrumbs
          separator={
            <Typography sx={{ ...textStyle, opacity: 0.5 }}>
              &gt;
            </Typography>
          }
          sx={{
            "& .MuiBreadcrumbs-ol": {
              alignItems: "center",
              flexWrap: "nowrap",
            },
          }}
        >
          {/* Home */}
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              ...textStyle,
              textDecoration: "none",
              transition: "0.2s",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            Home
          </Typography>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            const formatted = value
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return isLast ? (
              <Typography key={to} sx={textStyle}>
                {formatted}
              </Typography>
            ) : (
              <Typography
                key={to}
                component={RouterLink}
                to={to}
                sx={{
                  ...textStyle,
                  textDecoration: "none",
                  "&:hover": { opacity: 0.7 },
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