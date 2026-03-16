import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import companyImage from "../../assets/images/company-spei.jpeg";

function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${companyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(7,27,63,0.95) 0%, rgba(7,27,63,0.85) 50%, rgba(7,27,63,0.6) 100%)",
        }}
      />

      {/* Grid animation */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,196,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "moveGrid 20s linear infinite",
          pointerEvents: "none",
          "@keyframes moveGrid": {
            from: { backgroundPosition: "0 0, 0 0" },
            to: { backgroundPosition: "60px 60px, 60px 60px" },
          },
        }}
      />

      {/* ── SECTION: NO px here ── */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 2,
          // ✅ Offset for fixed navbar + breadcrumb
          pt: { xs: "130px", sm: "140px", md: "160px" },
          pb: { xs: "60px", sm: "80px", md: "100px" },
        }}
      >
        {/* ── CONTAINER ── */}
        <Box
          sx={{
            maxWidth: "1350px",
            width: "100%",
            mx: "auto",
            px: { xs: "16px", sm: "5%" }, // ✅ px on container
          }}
        >
          {/* ── CONTENT ── */}
          <Box sx={{ maxWidth: { xs: "100%", md: "720px", lg: "800px" } }}>

            {/* ✅ Overline badge */}
            {/* <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(255,196,0,0.12)",
                border: "1px solid rgba(255,196,0,0.3)",
                borderRadius: "20px",
                px: 2,
                py: 0.6,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#FFC400",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  color: "#FFC400",
                  fontWeight: 700,
                  fontSize: { xs: "10px", sm: "11px", md: "12px" },
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                Precision Engineering Since 1994
              </Typography>
            </Box> */}

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 300,
                color: "white",
                lineHeight: 1.15,
                mb: 3,
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                  md: "38px",
                  lg: "44px",
                },
              }}
            >
              Advanced
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#FFC400",
                  fontWeight: 900,
                  fontSize: {
                    xs: "34px",
                    sm: "40px",
                    md: "50px",
                    lg: "58px",
                  },
                  lineHeight: 1.1,
                  my: 0.5,
                }}
              >
                Special Purpose Machines
              </Box>
              for Industrial Automation
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                mb: { xs: 4, md: 5 },
                lineHeight: 1.75,
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                },
                maxWidth: "580px",
              }}
            >
              SPEI designs and manufactures custom-built automation and
              precision-engineered machinery tailored to complex manufacturing
              requirements.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1.5, md: 2 },
                flexWrap: "wrap",
              }}
            >
              {/* Primary */}
              <Button
                component={NavLink}
                to="/products"
                variant="contained"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#FFC400",
                  color: "#071b3f",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.2, md: 1.5 },
                  borderRadius: "8px",
                  transition: "all 0.35s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                    transition: "all 0.6s ease",
                  },
                  "&:hover::before": { left: "100%" },
                  "&:hover": {
                    backgroundColor: "#e6b000",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Explore Products
              </Button>

              {/* Secondary */}
              <Button
                component={NavLink}
                to="/contact"
                variant="outlined"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.2, md: 1.5 },
                  borderRadius: "8px",
                  transition: "all 0.35s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "white",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.35s ease",
                    zIndex: -1,
                  },
                  "&:hover::before": { transform: "scaleX(1)" },
                  "&:hover": {
                    borderColor: "white",
                    color: "#071b3f",
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>

            {/* ✅ Scroll indicator */}
            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "bounce 2s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(4px)" },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: "4px solid transparent",
                    borderRight: "4px solid transparent",
                    borderTop: "5px solid rgba(255,255,255,0.5)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: { xs: "11px", md: "12px" },
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Scroll to explore
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;