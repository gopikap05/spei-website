import { Box, Typography } from "@mui/material";

function Map() {
  const locationQuery = "12.768583,77.802028";
  const encodedLocation = encodeURIComponent(locationQuery);

  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`;
  const embedLink = `https://www.google.com/maps?q=${encodedLocation}&output=embed`;

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

        {/* Heading */}
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
          OUR LOCATION
        </Typography>

        <Typography
          sx={{
            mb: { xs: 3, md: 4 },
            fontWeight: 700,
            color: "#071b3f",
            fontSize: {
              xs: "22px",
              sm: "26px",
              md: "30px",
              lg: "34px",
            },
          }}
        >
          Find Us Here
        </Typography>

        {/* Gold underline */}
        <Box
          sx={{
            mb: { xs: 3, md: 4 },
            width: { xs: "48px", md: "64px" },
            height: "4px",
            borderRadius: "2px",
            backgroundColor: "#FFC400",
          }}
        />

        {/* Map */}
        <Box
          component="a"
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "block",
            width: "100%",
            height: { xs: "280px", sm: "360px", md: "420px", lg: "460px" },
            borderRadius: { xs: "10px", md: "14px" },
            overflow: "hidden",
            textDecoration: "none",
            border: "1px solid rgba(0,0,0,0.08)",
            //  Subtle hover effect on the map container
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box
            component="iframe"
            src={embedLink}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Map;