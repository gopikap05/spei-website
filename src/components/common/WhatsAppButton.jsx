import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsAppButton() {
  const phoneNumber = "919500990032";
  const message = `Hello, I am interested in ${window.location.pathname}. Please share details.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Track WhatsApp Click
  const handleClick = () => {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: window.location.pathname,
        value: 1,
      });
    }
  };

  return (
    <Fab
      color="success"
      href={url}
      target="_blank"
      onClick={handleClick} 
      sx={{
        position: "fixed",
        bottom: "90px",
        right: "32px",
        width: "50px",
        height: "50px",
        zIndex: 9999,

        animation: "pulse 2s infinite",

        "@keyframes pulse": {
          "0%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.6)",
          },
          "70%": {
            transform: "scale(1.08)",
            boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)",
          },
          "100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
          },
        },

        "&:hover": {
          transform: "scale(1.15)",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: "26px" }} />
    </Fab>
  );
}

export default WhatsAppButton;