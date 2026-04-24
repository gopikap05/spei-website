import { Box, Typography, Paper } from "@mui/material";
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

function Details() {
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
        }}
      >
        <Box
          sx={{
            flex: 0.4,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 1.5 },
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
                p: { xs: 1.5, md: 2 },
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
                    width: { xs: 30, sm: 40, md: 44 },
                    height: { xs: 30, sm: 40, md: 44 },
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
                  <Typography sx={{ fontWeight: 700, color: "#FFC400", fontSize: "14px", mb: 0.3 }}>
                    {item.label}
                  </Typography>
                  <Typography
                    component="a"
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                    sx={{
                      color: "#000000ff",
                      textDecoration: "none",
                      fontSize: "14px",
                      mt: "5px",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                      "&:hover": {
                        background: "linear-gradient(135deg, #B8860B 0%, #1E3A8A 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "15px",
                        marginTop: "5px"
                      },
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
    </Box>
  );
}

export default Details;