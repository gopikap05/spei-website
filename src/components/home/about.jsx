import { Box, Typography, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function AboutSection() {
  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" },
        py: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
        backgroundColor: "#f5f7fb",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "100%", mx: "auto" }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#7a6000", // ✅ was #D4AF37 (fails on #f5f7fb), now passes 4.5:1
                fontWeight: 900,
                letterSpacing: 2,
                fontSize: { xs: "11px", sm: "12px", md: "13px" },
              }}
            >
              ABOUT US
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                mt: 2,
                mb: 3,
                color: "#071b3f",
                lineHeight: 1.25,
                fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
              }}
            >
              Engineering Excellence in
              <br />
              Special Purpose Machinery
            </Typography>

            <Typography
              sx={{
                color: "#444", // ✅ was #555, darkened slightly for better contrast
                lineHeight: 1.8,
                mb: 4,
                fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
              }}
            >
              SP Engineers India is a precision-driven manufacturer specializing in
              custom-built <strong>Special Purpose Machines (SPMs)</strong> tailored to industrial
              production environments. We design, develop, and deliver
              <strong> industrial automation solutions</strong> that enhance efficiency and operational
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
                  background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
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
              Learn More About SPM Solutions
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AboutSection;