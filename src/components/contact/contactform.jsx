import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const contactDetails = [
  {
    icon: <PhoneIcon sx={{ color: "#FFC400", fontSize: "22px" }} />,
    label: "Phone Number",
    value: "9500990032",
    href: "tel:9500990032",
  },
  {
    icon: <EmailIcon sx={{ color: "#FFC400", fontSize: "22px" }} />,
    label: "Email Address",
    value: "spengineersindia2001@gmail.com",
    href: "mailto:spengineersindia2001@gmail.com",
  },
  {
    icon: <LocationOnIcon sx={{ color: "#FFC400", fontSize: "22px" }} />,
    label: "Our Location",
    value: "Hosur, Tamil Nadu, India",
    href: "https://www.google.com/maps/dir/?api=1&destination=12.768583,77.802028",
    external: true,
  },
];

// ✅ Brand-colored input style
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    background: "#fafafa",
    transition: "all 0.25s ease",
    "& fieldset": {
      borderColor: "rgba(0,0,0,0.12)",
    },
    "&:hover fieldset": {
      borderColor: "#071b3f",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#071b3f",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#071b3f",
  },
};

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    // ── SECTION ──
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" }, // ✅ mobile safety margin
        py: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
        },
        backgroundColor: "#ffffff",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── CONTAINER ── */}
      <Box
        sx={{
          maxWidth: "1350px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 6, lg: 8 },
        }}
      >
        {/* ── LEFT: Form ── */}
        <Box sx={{ flex: 0.6 }}>
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
            SEND A MESSAGE
          </Typography>

          <Typography
            sx={{
              mb: 1.5,
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
            Get In Touch
          </Typography>

          {/* Gold underline */}
          <Box
            sx={{
              mb: 3,
              width: { xs: "48px", md: "64px" },
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />

          <Typography
            sx={{
              mb: 4,
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Have questions or need more details? Fill out the form below
            and we'll get back to you shortly.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                sx={inputStyle}
              />
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                sx={inputStyle}
              />
            </Box>

            {/* Row 2 */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                fullWidth
                label="Email ID"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={inputStyle}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                sx={inputStyle}
              />
            </Box>

            {/* Message */}
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              sx={{ ...inputStyle, mb: 3 }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#071b3f", // ✅ brand color
                color: "white",
                px: { xs: 4, md: 5 },
                py: { xs: 1.3, md: 1.5 },
                fontWeight: 700,
                letterSpacing: "0.5px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
                transition: "all 0.35s ease",
                // Shimmer effect
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
                  transition: "all 0.6s ease",
                },
                "&:hover::before": { left: "100%" },
                "&:hover": {
                  backgroundColor: "#0b2a66",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        {/* ── RIGHT: Contact Details ── */}
        <Box
          sx={{
            flex: 0.4,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
              display: "block",
              mb: 0.5,
            }}
          >
            REACH US DIRECTLY
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              color: "#071b3f",
              mb: 1,
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
            }}
          >
            Contact Details
          </Typography>

          {/* Gold underline */}
          <Box
            sx={{
              mb: 1,
              width: "48px",
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />

          {contactDetails.map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "12px",
                border: "1px solid rgba(0,0,0,0.07)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "rgba(255,196,0,0.4)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                  transform: "translateX(4px)", // ✅ slide right on hover
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Icon box */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,196,0,0.1)",
                    border: "1px solid rgba(255,196,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#071b3f",
                      fontSize: { xs: "13px", sm: "14px" },
                      mb: 0.3,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    component="a"
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    sx={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: { xs: "13px", md: "14px" },
                      transition: "color 0.2s ease",
                      display: "block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      "&:hover": { color: "#071b3f" },
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ContactForm;