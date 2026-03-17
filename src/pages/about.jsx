import { Box, Typography } from "@mui/material";
import AboutMe from "../components/about/aboutme";
import Steps from "../components/about/steps";

// ✅ ADD THIS
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>About SP Engineers India | 30+ Years Industrial Experience</title>

        <meta
          name="description"
          content="Learn about SP Engineers India, a trusted SPM machine manufacturer with over 30 years of experience in industrial machines, automation, and refurbishment services."
        />

        <meta
          name="keywords"
          content="about SP Engineers India, SPM manufacturer India, industrial automation company, machine refurbishment Hosur"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About SP Engineers India" />
        <meta
          property="og:description"
          content="30+ years experience in industrial machines and automation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/about" />
      </Helmet>
      {/* ✅ SEO END */}

      {/* ✅ H1 for SEO (hidden, no UI change) */}
      <h1 style={{ display: "none" }}>
        About SP Engineers India | SPM Machine Manufacturer in India
      </h1>

      {/* ── SECTION: Page Header ── */}
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" },
          pt: {
            xs: "65px",
            sm: "90px",
            md: "80px",
            lg: "100px",
          },
          pb: {
            xs: "40px",
            sm: "60px",
            md: "70px",
            lg: "50px",
          },
          background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
          color: "white",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
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
            WHO WE ARE
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
            About Us
          </Typography>

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
      <AboutMe />
      <Steps />
    </>
  );
}

export default About;