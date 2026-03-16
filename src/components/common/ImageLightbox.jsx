// ImageLightbox.jsx
import { Box } from "@mui/material";
import { useState } from "react";
import { createPortal } from "react-dom";

function ImageLightbox({ src, alt, sx = {} }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Clickable image with hover overlay */}
      <Box
        sx={{ position: "relative", cursor: "pointer", ...sx }}
        onClick={() => setOpen(true)}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            // ✅ Removed scale hover — was causing reflow flicker
          }}
        />

        {/* Hover overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(7,27,63,0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(7,27,63,0.45)",
              "& .zoom-icon": { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <Box
            className="zoom-icon"
            sx={{
              opacity: 0,
              transform: "scale(0.7)",
              transition: "all 0.3s ease",
              width: 52,
              height: 52,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "22px",
              pointerEvents: "none", // ✅ prevents icon intercepting clicks
            }}
          >
            🔍
          </Box>
        </Box>
      </Box>

      {/* ✅ Portaled outside DOM — fixes position:fixed broken by parent transform */}
      {open && createPortal(
        <Box
          onClick={() => setOpen(false)}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 2, md: 4 },
            cursor: "zoom-out",
          }}
        >
          {/* Close button */}
          <Box
            onClick={() => setOpen(false)}
            sx={{
              position: "fixed", // ✅ fixed not absolute
              top: { xs: 14, md: 22 },
              right: { xs: 14, md: 26 },
              width: 42,
              height: 42,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              zIndex: 10000,
              transition: "background-color 0.2s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.28)" },
            }}
          >
            ✕
          </Box>

          {/* Full image */}
          <Box
            component="img"
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: "95vw",   // ✅ nearly full screen width
              maxHeight: "95vh",  // ✅ nearly full screen height
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
              cursor: "default",
            }}
          />
        </Box>,
        document.body // ✅ renders at body level, outside any transformed parent
      )}
    </>
  );
}

export default ImageLightbox;