import { Box, Typography } from "@mui/material";
import ContactForm from "../components/contact/contactform";
import Map from "../components/contact/map";

function Contact() {
  return (
    <>
      {/* ── SECTION: Page Header ── */}
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" }, // ✅ mobile safety margin
          // ✅ Top padding clears fixed navbar + breadcrumb
          pt: {
            xs: "120px",
            sm: "130px",
            md: "150px",
          },
          pb: {
            xs: "40px",
            sm: "60px",
            md: "80px",
            lg: "100px",
          },
          background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
          color: "white",
          width: "100%",
          boxSizing: "border-box",
          // ❌ Removed margin: "0px" — unnecessary reset
        }}
      >
        {/* ── CONTAINER ── */}
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

          {/* ── CONTENT ── */}
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
              display: "block",
              mb: 1.5,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "44px",
                lg: "52px",
              },
            }}
          >
            Contact Us
          </Typography>

          {/* Decorative gold underline */}
          <Box
            sx={{
              mt: 2.5,
              width: { xs: "48px", md: "64px" },
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />
        </Box>
      </Box>

      {/* ── Main Content ── */}
      <ContactForm />
      <Map />
    </>
  );
}

export default Contact;