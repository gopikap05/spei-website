import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

function Map() {
  const [mapError, setMapError] = useState(false);
  const latitude = 12.768583;
  const longitude = 77.802028;

  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  const noScriptLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=14/${latitude}/${longitude}`;

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

        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "280px", sm: "360px", md: "420px", lg: "460px" },
            borderRadius: { xs: "10px", md: "14px" },
            border: "1px solid rgba(0,0,0,0.08)",
            backgroundColor: "#eaf1fb",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 3,
          }}
        >
          <Typography sx={{ mb: 2, color: "#2f4f7a" }}>
            Interactive map blocked in this environment. View location in an external map service:
          </Typography>
          <Button
            component="a"
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{ mb: 1 }}
          >
            Open in Google Maps
          </Button>
          <Button
            component="a"
            href={noScriptLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
          >
            Open in OpenStreetMap
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Map;