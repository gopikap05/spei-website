import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
  value: (
    <>
      Plot No: 22, SF No: 579/5A1,<br />
      Rajaji Layout, Rajsriya U-8 Back Side,<br />
      Hosur Taluk, Krishnagiri District - 635126
    </>
  ),
  href:
    "https://www.google.com/maps/dir/?api=1&destination=Plot%20No%2022%2C%20SF%20No%20579%2F5A1%2C%20Rajaji%20Layout%2C%20Hosur%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635126",
  external: true,
}
];

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
    firstName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    company: false,
    email: false,
    phone: false,
    message: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [loading, setLoading] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_8e1pz9j";
  const EMAILJS_TEMPLATE_ID = "template_llk2292"; // Your template
  const EMAILJS_PUBLIC_KEY = "jMCUD7zLd8Wt2y3wX";

  // Validation functions (keeping your existing validation)
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim()) return "First name is required";
    if (!nameRegex.test(name)) return "First name should only contain letters and spaces";
    if (name.trim().length < 2) return "First name must be at least 2 characters";
    return "";
  };

  const validateCompany = (company) => {
    if (company && company.trim().length < 2) return "Company name must be at least 2 characters if provided";
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

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let filteredValue = value;
    
    if (name === "firstName") {
      filteredValue = value.replace(/[^A-Za-z\s]/g, "");
    } else if (name === "phone") {
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "company") {
      filteredValue = value.replace(/[^A-Za-z0-9\s&.,-]/g, "");
    } else if (name === "email") {
      filteredValue = value.toLowerCase();
    }

    setFormData({ ...formData, [name]: filteredValue });

    let error = "";
    switch (name) {
      case "firstName":
        error = validateName(filteredValue);
        break;
      case "company":
        error = validateCompany(filteredValue);
        break;
      case "email":
        error = validateEmail(filteredValue);
        break;
      case "phone":
        error = validatePhone(filteredValue);
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
      case "firstName":
        error = validateName(formData[name]);
        break;
      case "company":
        error = validateCompany(formData[name]);
        break;
      case "email":
        error = validateEmail(formData[name]);
        break;
      case "phone":
        error = validatePhone(formData[name]);
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
      firstName: validateName(formData.firstName),
      company: validateCompany(formData.company),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    setTouched({
      firstName: true,
      company: true,
      email: true,
      phone: true,
      message: true,
    });

    return !Object.values(newErrors).some(error => error !== "");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      try {
        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);
        
        // IMPORTANT: For AUTO-REPLY, the email goes TO the customer
        // The "to_email" parameter must match what's in your template
        
        const templateParams = {
          // Customer's email (where auto-reply goes)
          to_email: formData.email,  // This sends email to the customer
          to_name: formData.firstName, // Customer's name for personalization
          
          // Sender details
          from_name: formData.firstName,
          from_company: formData.company || 'Not provided',
          from_email: formData.email,
          from_phone: `+91${formData.phone}`,
          message: formData.message,
          
          // Your company details for the auto-reply
          company_name: 'SP Engineers',
          contact_phone: '+91 9500990032',
          contact_email: 'spengineersindia2001@gmail.com',
          contact_location: 'Hosur, Tamil Nadu, India',
        };

        console.log("Sending auto-reply to customer:", templateParams.to_email);

        // Send email
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );

        console.log("Auto-reply sent successfully:", result.text);

        setSnackbar({
          open: true,
          message: "Message sent successfully! Check your email for confirmation.",
          severity: "success",
        });
        
        // Reset form
        setFormData({
          firstName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        
        setTouched({
          firstName: false,
          company: false,
          email: false,
          phone: false,
          message: false,
        });

      } catch (error) {
        console.error("EmailJS Error:", error);
        
        let errorMessage = "Failed to send message. ";
        if (error.text) {
          errorMessage += error.text;
        } else {
          errorMessage += "Please try again.";
        }
        
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
          maxWidth: "1350px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 6, lg: 8 },
        }}
      >
        {/* Left: Form */}
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

          <Box component="form" ref={formRef} onSubmit={sendEmail} noValidate>
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
                onBlur={handleBlur}
                required
                error={touched.firstName && errors.firstName !== ""}
                helperText={touched.firstName && errors.firstName}
                sx={inputStyle}
              />
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company && errors.company !== ""}
                helperText={touched.company && errors.company}
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
                onBlur={handleBlur}
                required
                error={touched.email && errors.email !== ""}
                helperText={touched.email && errors.email}
                sx={inputStyle}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
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

            {/* Message */}
            <TextField
              fullWidth
              label="Message"
              name="message"
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

        {/* Right: Contact Details */}
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
                  transform: "translateX(4px)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#071b3f", fontSize: "14px", mb: 0.3 }}>
                    {item.label}
                  </Typography>
                  <Typography
                    component="a"
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                    sx={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: "14px",
                      "&:hover": { color: "#071b3f" },
                    }}
                  >
                    {item.label === "Phone Number" ? `+91 ${item.value}` : item.value}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
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