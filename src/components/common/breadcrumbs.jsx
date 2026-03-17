import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Reusable animated link style
  const linkSx = {
    color: "#071b3f",
    fontWeight: 700,
    fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
    position: "relative",
    textDecoration: "none",
    transition: "color 0.25s ease",
    // ✅ Animated underline via pseudo-element
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -1,
      left: 0,
      width: "0%",
      height: "1.5px",
      backgroundColor: "#071b3f",
      transition: "width 0.3s ease",
    },
    "&:hover": {
      color: "#000000",
      opacity: 0.7,
      textDecoration: "none", // ✅ kill MUI default underline
      "&::after": {
        width: "100%", // ✅ underline slides in on hover
      },
    },
  };

  return (
    // ── SECTION ──
    <Box
      sx={{
        position: "fixed",
        top: { xs: 64, sm: 70, md: 82 },
        left: 0,
        width: "100%",
        backgroundColor: "#f0cd7c",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        py: { xs: 1, sm: 1.2, md: 1.5, lg: 2 },
        zIndex: 1200,
      }}
    >
      {/* ── CONTAINER ── */}
      <Box
        sx={{
          maxWidth: "1350px",
          width: "100%",
          mx: "auto",
          px: { xs: "16px", sm: "5%" },
        }}
      >
        {/* ── CONTENT ── */}
        <MUIBreadcrumbs
          separator={
            <Box
              component="span"
              sx={{
                color: "#071b3f",
                opacity: 0.35,
                fontSize: { xs: "12px", sm: "13px", md: "14px" },
                fontWeight: 400,
                lineHeight: 1,
                mx: 0.2,
              }}
            >
              /
            </Box>
          }
          aria-label="breadcrumb"
          sx={{
            // ✅ clean up MUI default separator spacing
            "& .MuiBreadcrumbs-separator": {
              mx: 0.8,
            },
            "& .MuiBreadcrumbs-ol": {
              alignItems: "center",
              flexWrap: "nowrap",
            },
          }}
        >
          {/* Home */}
          <Link component={RouterLink} to="/" sx={linkSx}>
            Home
          </Link>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            const formatted = value
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return isLast ? (
              // ✅ Last crumb: bold, no hover, subtle dot indicator
              <Box
                key={to}
                sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#071b3f",
                    opacity: 0.5,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#071b3f",
                    fontWeight: 700,
                    letterSpacing: 0.2,
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "15px",
                    },
                  }}
                >
                  {formatted}
                </Typography>
              </Box>
            ) : (
              // Middle crumbs
              <Link key={to} component={RouterLink} to={to} sx={linkSx}>
                {formatted}
              </Link>
            );
          })}
        </MUIBreadcrumbs>
      </Box>
    </Box>
  );
}

export default Breadcrumbs;