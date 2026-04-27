import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    purpose: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    location: false,
    purpose: false,
    message: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [loading, setLoading] = useState(false);

  const EMAILJS_SERVICE_ID = "service_8e1pz9j";
  const EMAILJS_TEMPLATE_ID = "template_llk2292";
  const EMAILJS_PUBLIC_KEY = "jMCUD7zLd8Wt2y3wX";

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim()) return "Name is required";
    if (!nameRegex.test(name)) return "Name should only contain letters and spaces";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone.trim()) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Phone number must be exactly 10 digits";
    return "";
  };

  const validateCompany = (company) => {
    if (company && company.trim().length < 2) return "Company name must be at least 2 characters if provided";
    return "";
  };

  const validateLocation = (location) => {
    if (location && location.trim().length < 2) return "Location must be at least 2 characters if provided";
    return "";
  };

  const validatePurpose = (purpose) => {
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let filteredValue = value;

    if (name === "name") {
      filteredValue = value.replace(/[^A-Za-z\s]/g, "");
    } else if (name === "phone") {
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "company") {
      filteredValue = value.replace(/[^A-Za-z0-9\s&.,-]/g, "");
    } else if (name === "location") {
      filteredValue = value.replace(/[^A-Za-z0-9\s,.-]/g, "");
    } else if (name === "email") {
      filteredValue = value.toLowerCase();
    }

    setFormData({ ...formData, [name]: filteredValue });

    let error = "";
    switch (name) {
      case "name":
        error = validateName(filteredValue);
        break;
      case "email":
        error = validateEmail(filteredValue);
        break;
      case "phone":
        error = validatePhone(filteredValue);
        break;
      case "company":
        error = validateCompany(filteredValue);
        break;
      case "location":
        error = validateLocation(filteredValue);
        break;
      case "purpose":
        error = validatePurpose(filteredValue);
        break;
      case "message":
        error = validateMessage(filteredValue);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    let error = "";
    switch (name) {
      case "name":
        error = validateName(formData[name]);
        break;
      case "email":
        error = validateEmail(formData[name]);
        break;
      case "phone":
        error = validatePhone(formData[name]);
        break;
      case "company":
        error = validateCompany(formData[name]);
        break;
      case "location":
        error = validateLocation(formData[name]);
        break;
      case "purpose":
        error = validatePurpose(formData[name]);
        break;
      case "message":
        error = validateMessage(formData[name]);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      company: validateCompany(formData.company),
      location: validateLocation(formData.location),
      purpose: validatePurpose(formData.purpose),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      location: true,
      purpose: true,
      message: true,
    });

    return !Object.values(newErrors).some(error => error !== "");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);

        const templateParams = {
          to_email: formData.email,
          to_name: formData.name,
          from_name: formData.name,
          from_company: formData.company || 'Not provided',
          from_location: formData.location || 'Not provided',
          from_purpose: formData.purpose || 'Not provided',
          from_email: formData.email,
          from_phone: `+91${formData.phone}`,
          message: formData.message,
          company_name: 'SP Engineers India',
          contact_phone: '+91 9500990032',
          contact_email: 'spengineersindia2001@gmail.com',
          contact_location: 'Hosur, Tamil Nadu, India',
        };

        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );

        setSnackbar({
          open: true,
          message: "Message sent successfully! Check your email for confirmation.",
          severity: "success",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          location: "",
          purpose: "",
          message: "",
        });

        setTouched({
          name: false,
          email: false,
          phone: false,
          company: false,
          location: false,
          purpose: false,
          message: false,
        });

      } catch (error) {
        console.error("EmailJS Error:", error);

        let errorMessage = "Failed to send message. Please try again.";

        setSnackbar({
          open: true,
          message: errorMessage,
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    } else {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form before submitting.",
        severity: "error",
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
        backgroundColor: "#ffffff",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
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
            SEND A MESSAGE
          </Typography>

          <Typography
            component="h2"
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
            Have questions about our <strong>SPM machines</strong> or <strong>industrial automation</strong> solutions?
            Fill out the form below and we'll get back to you shortly.
          </Typography>

          <Box component="form" ref={formRef} onSubmit={sendEmail} noValidate>
            {/* Row 1: Name, Email, Phone */}
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
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={touched.name && errors.name !== ""}
                helperText={touched.name && errors.name}
                sx={inputStyle}
              />
              <TextField
                fullWidth
                id="email"
                label="Email ID"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={touched.email && errors.email !== ""}
                helperText={touched.email && errors.email}
                sx={inputStyle}
              />
              <TextField
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={touched.phone && errors.phone !== ""}
                helperText={touched.phone && errors.phone}
                sx={inputStyle}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "#071b3f", fontWeight: 500 }}>
                      +91
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  inputMode: "numeric",
                  maxLength: 10,
                }}
              />
            </Box>

            {/* Row 2: Company, Location, Purpose */}
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
                id="company"
                label="Company (Optional)"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company && errors.company !== ""}
                helperText={touched.company && errors.company}
                sx={inputStyle}
              />
              <TextField
                fullWidth
                id="location"
                label="Location (Optional)"
                name="location"
                autoComplete="address-level2"
                value={formData.location}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.location && errors.location !== ""}
                helperText={touched.location && errors.location}
                sx={inputStyle}
                placeholder="City, State"
              />
              <TextField
                fullWidth
                id="purpose"
                label="Purpose of Contact (Optional)"
                name="purpose"
                autoComplete="off"
                value={formData.purpose}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.purpose && errors.purpose !== ""}
                helperText={touched.purpose && errors.purpose}
                sx={inputStyle}
                placeholder="Product inquiry, Support, etc."
              />
            </Box>

            {/* Row 3: Message */}
            <TextField
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="off"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              error={touched.message && errors.message !== ""}
              helperText={touched.message && errors.message}
              sx={{ ...inputStyle, mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "#071b3f",
                color: "white",
                px: { xs: 4, md: 5 },
                py: { xs: 1.3, md: 1.5 },
                fontWeight: 700,
                borderRadius: "8px",
                textTransform: "none",
                minWidth: "160px",
                "&:hover": {
                  backgroundColor: "#0b2a66",
                },
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Send Message"}
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactForm;