import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function CTASection() {
  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" },
        py: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
        },
        position: "relative",
        background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
        color: "white",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,196,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "moveGrid 25s linear infinite",
          "@keyframes moveGrid": {
            from: { backgroundPosition: "0 0, 0 0" },
            to: { backgroundPosition: "60px 60px, 60px 60px" },
          },
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#FFC400",
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: { xs: "11px", sm: "12px", md: "13px" },
            display: "block",
            mb: 2,
            opacity: 0.9,
          }}
        >
          LET'S WORK TOGETHER
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: {
              xs: "22px",
              sm: "28px",
              md: "34px",
              lg: "40px",
            },
            lineHeight: 1.25,
          }}
        >
          Looking for a Custom
          <br />
          Special Purpose Machine?
        </Typography>

        <Typography
          sx={{
            maxWidth: "640px",
            mx: "auto",
            opacity: 0.85,
            mb: { xs: 4, md: 5 },
            lineHeight: 1.75,
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "15px",
              lg: "16px",
            },
          }}
        >
          Partner with SP Engineers India to design and manufacture precision-engineered
          <strong> custom SPM machinery</strong> tailored specifically to your industrial requirements.
          Let's build an <strong>industrial automation solution</strong> that improves efficiency and drives productivity.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, md: 3 },
            flexWrap: "wrap",
          }}
        >
          <Button
            component={NavLink}
            to="/contact"
            variant="contained"
            sx={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#FFC400",
              color: "#071b3f",
              fontWeight: 700,
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              px: { xs: 4, md: 5 },
              py: { xs: 1.3, md: 1.6 },
              borderRadius: "8px",
              textDecoration: "none",
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
                transform: "translateY(-3px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              },
            }}
          >
            Request Consultation
          </Button>

          <Button
            component={NavLink}
            to="/products"
            variant="outlined"
            sx={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              px: { xs: 4, md: 5 },
              py: { xs: 1.3, md: 1.6 },
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.35s ease",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.08)",
                transform: "translateY(-3px)",
              },
            }}
          >
            View Our SPM Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CTASection;