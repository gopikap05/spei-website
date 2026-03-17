import { Box } from "@mui/material";
import { useState } from "react";
import { createPortal } from "react-dom";

function ImageLightbox({ src, alt, sx = {} }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{ position: "relative", cursor: "pointer", ...sx }}
        onClick={() => setOpen(true)}
        aria-label={`View larger image of ${alt}`}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

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
              backgroundColor: "rgba(7,27,63,0.55)",
              "& .zoom-text": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Box
            className="zoom-text"
            sx={{
              opacity: 0,
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              px: 2.5,
              py: 1,
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.6)",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.3px",
              backdropFilter: "blur(6px)",
              pointerEvents: "none",
            }}
          >
            View Image
          </Box>
        </Box>
      </Box>

      {open &&
        createPortal(
          <Box
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Image lightbox for ${alt}`}
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
            <Box
              onClick={() => setOpen(false)}
              aria-label="Close lightbox"
              sx={{
                position: "fixed",
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
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.28)",
                },
              }}
            >
              ✕
            </Box>

            <Box
              component="img"
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              loading="lazy"
              sx={{
                maxWidth: "95vw",
                maxHeight: "95vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                cursor: "default",
              }}
            />
          </Box>,
          document.body
        )}
    </>
  );
}

export default ImageLightbox;