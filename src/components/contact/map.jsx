import { Box, Typography, Button } from "@mui/material";

function Map() {
  const latitude = 12.768583;
  const longitude = 77.802028;

  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

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
        backgroundColor: "#f5f7fb",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
        
        <Typography
          variant="overline"
          sx={{
            color: "#D4AF37",
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
          component="h2"
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
          Find Us in Hosur, Tamil Nadu
        </Typography>

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
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "280px", sm: "360px", md: "420px", lg: "460px" },
            borderRadius: { xs: "10px", md: "14px" },
            border: "1px solid rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Button overlay */}
          <Button
            variant="contained"
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              backgroundColor: "#071b3f",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              px: 2,
              py: 1,
              "&:hover": {
                backgroundColor: "#0a2a5c",
              },
            }}
          >
            Open in Google Maps
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default Map;