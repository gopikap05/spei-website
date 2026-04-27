import { Box, Typography, Paper, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        Plot No: 22, SF No: 579/5A1,
        Rajaji Layout, Rajsriya U-8 Back Side,
        Hosur Taluk, Krishnagiri District - 635126
      </>
    ),
    href: "https://www.google.com/maps/dir/?api=1&destination=Plot%20No%2022%2C%20SF%20No%20579%2F5A1%2C%20Rajaji%20Layout%2C%20Hosur%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635126",
    external: true,
  },
  {
    icon: <LinkedInIcon sx={{ color: "#FFC400", fontSize: "22px" }} />,
    label: "LinkedIn",
    value: "Palanisamy K",
    href: "https://www.linkedin.com/in/palanisamy-k-47970b402/",
    external: true,
  },
];

// Policy sections for the right side
const policySections = [
  {
    title: "Privacy Policy",
    content: "At SP Engineers India, we are committed to protecting your privacy. We collect,...",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    content: "By using our website, you agree to our terms governing the use of our site,...",
    link: "/terms-and-conditions",
  },
  {
    title: "Cookie Policy",
    content: "We use cookies and Google Analytics to enhance your browsing experience...",
    link: "/cookie-policy",
  },
];

function Details() {
  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    // Use window.location for external navigation or if using React Router
    window.location.href = path;
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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left Side - Contact Details (50%) */}
        <Box
          sx={{
            flex: { xs: 1, md: "0 0 50%" },
            maxWidth: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#D4AF37",
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
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#071b3f",
              mb: 0.1,
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
            }}
          >
            Contact Details
          </Typography>

          <Box
            sx={{
              mb: 3,
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
                p: { xs: 1.5, md: 2 },
                mb: 2,
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
                    width: { xs: 40, sm: 44, md: 48 },
                    height: { xs: 40, sm: 44, md: 48 },
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

                <Box>
                  <Typography 
                    sx={{ 
                      fontWeight: 700, 
                      color: "#071b3f", 
                      fontSize: { xs: "12px", sm: "13px", md: "14px" }, 
                      mb: 0.5 
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Link
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                    underline="none"
                    sx={{
                      color: "#111827",
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      transition: "color 0.2s ease",
                      display: "inline-block",
                      "&:hover": {
                        color: "#071b3f",
                      },
                    }}
                  >
                    {item.label === "Phone Number" ? `+91 ${item.value}` : item.value}
                  </Link>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Right Side - Policies (50%) */}
        <Box
          sx={{
            flex: { xs: 1, md: "0 0 50%" },
            maxWidth: { xs: "100%", md: "45%" },
          }}
        >
          <Box
            sx={{
              position: { md: "sticky" },
              top: { md: "100px" },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#D4AF37",
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: { xs: "11px", sm: "12px", md: "13px" },
                display: "block",
                mb: 0.5,
              }}
            >
              LEGAL
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                color: "#071b3f",
                mb: 0.1,
                fontSize: { xs: "22px", sm: "26px", md: "30px" },
              }}
            >
              Policies
            </Typography>

            <Box
              sx={{
                mb: 3,
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#FFC400",
              }}
            />

            {policySections.map((policy, index) => (
              <Paper
                key={index}
                elevation={0}
                onClick={() => handleNavigation(policy.link)}
                sx={{
                  p: { xs: 1.5, md: 2 },
                  mb: 2,
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "rgba(255,196,0,0.4)",
                    transform: "translateX(4px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#071b3f",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    mb: 1,
                  }}
                >
                  {policy.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#4b5563",
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    lineHeight: 1.6,
                  }}
                >
                  {policy.content}
                </Typography>
                <Typography
                  sx={{
                    color: "#071b3f",
                    fontSize: "14px",
                    mt: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Read More →
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;