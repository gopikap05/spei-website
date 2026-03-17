import { Box, Typography } from "@mui/material";
import Openings from "../components/career/openings";
import { Helmet } from "react-helmet-async";

function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers at SP Engineers India | SPM Manufacturing Jobs in Hosur</title>

        <meta
          name="description"
          content="Explore career opportunities at SP Engineers India. Join our team in Hosur, Tamil Nadu and grow in the field of industrial automation, SPM manufacturing, and machine design."
        />

        <link rel="canonical" href="https://www.spei.in/careers" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Careers at SP Engineers India - Jobs in Hosur" />
        <meta property="og:description" content="Join our team and build your career in industrial automation and SPM manufacturing in Hosur, Tamil Nadu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/careers" />
      </Helmet>

      <h1 style={{ display: "none" }}>Careers at SP Engineers India | Jobs in Hosur Tamil Nadu for SPM and Automation Industry</h1>

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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "1px solid rgba(255,196,0,0.12)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-120px",
            right: "60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />

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
            JOIN OUR TEAM
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
            Careers at SPEI
          </Typography>

          <Box
            sx={{
              mt: 3,
              width: { xs: "48px", md: "64px" },
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />
        </Box>
      </Box>

      <Openings />
    </>
  );
}

export default Careers;