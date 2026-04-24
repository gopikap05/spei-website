import { Box, Typography } from "@mui/material";
import ContactForm from "../components/contact/contactform";
import Details from "../components/contact/details";
import Map from "../components/contact/map";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact SP Engineers India | SPM Manufacturer in Hosur Tamil Nadu</title>

        <meta
          name="description"
          content="Contact SP Engineers India for custom Special Purpose Machines, industrial automation, and machine refurbishment services in Hosur, Tamil Nadu. Get a quote today."
        />

        <link rel="canonical" href="https://www.spei.in/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Contact SP Engineers India - SPM Manufacturer Hosur" />
        <meta property="og:description" content="Get in touch for custom SPM machines, industrial automation, and machine refurbishment solutions in Tamil Nadu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/contact" />
        <meta property="og:image" content="https://www.spei.in/og-image.jpg" />
      </Helmet>

      <h1 style={{ display: "none" }}>
        Contact SP Engineers India | Special Purpose Machine Manufacturer in Hosur, Tamil Nadu
      </h1>

      <Box
        sx={{
          px: { xs: "16px", sm: "5%" },
          pt: { xs: "65px", sm: "90px", md: "80px", lg: "100px" },
          pb: { xs: "40px", sm: "60px", md: "70px", lg: "50px" },
          background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
          color: "white",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
          <Typography variant="overline" sx={{ color: "#FFC400", fontWeight: 700, letterSpacing: 2, fontSize: { xs: "11px", sm: "12px", md: "13px" }, display: "block", mb: 1.5 }}>
            GET IN TOUCH
          </Typography>

          <Typography sx={{ fontWeight: 700, color: "white", lineHeight: 1.2, fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" } }}>
            Contact Us
          </Typography>

          <Box sx={{ mt: 2.5, width: { xs: "48px", md: "64px" }, height: "4px", borderRadius: "2px", backgroundColor: "#FFC400" }} />
        </Box>
      </Box>

      <ContactForm />
      <Details />
      <Map />
    </>
  );
}

export default Contact;