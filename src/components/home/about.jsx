import { Box, Typography, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const stats = [
  { value: "10+", label: "Years of Industry Experience" },
  { value: "150+", label: "Machines Delivered" },
  { value: "12+", label: "Industries Served" },
  { value: "100%", label: "Custom Engineering Focus" },
];

function AboutSection() {
  return (
    // ── SECTION ──
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" }, //  mobile safety margin
        py: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
        },
        backgroundColor: "#f5f7fb",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── CONTAINER ── */}
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">

          {/* ── LEFT: Text Content ── */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: "#FFC400",
                fontWeight: 900,
                letterSpacing: 2,
                fontSize: { xs: "11px", sm: "12px", md: "13px" },
              }}
            >
              ABOUT US
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                mt: 2,
                mb: 3,
                color: "#071b3f",
                lineHeight: 1.25,
                fontSize: {
                  xs: "24px",
                  sm: "28px",
                  md: "32px",
                  lg: "36px",
                },
              }}
            >
              Engineering Excellence in
              <br />
              Special Purpose Machinery
            </Typography>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.8,
                mb: 4,
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                },
              }}
            >
              SPEI is a precision-driven manufacturer specializing in
              custom-built Special Purpose Machines tailored to industrial
              production environments. We design, develop, and deliver
              solutions that enhance efficiency, automation, and operational
              reliability.
            </Typography>

            <Button
              component={NavLink}
              to="/about"
              variant="contained"
              sx={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#071b3f",
                color: "white",
                fontWeight: 600,
                fontSize: { xs: "13px", sm: "14px" },
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
                  backgroundColor: "#0b2a66",
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                },
                "&:active": { transform: "scale(0.96)" },
              }}
            >
              Learn More
            </Button>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}

export default AboutSection;