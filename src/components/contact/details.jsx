import { Box, Typography, Link } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactItems = [
  {
    icon: <EmailOutlinedIcon fontSize="small" />,
    label: "Email",
    value: "info@spei.com",
    href: "mailto:info@spei.com",
  },
  {
    icon: <PhoneOutlinedIcon fontSize="small" />,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: <LinkedInIcon fontSize="small" />,
    label: "LinkedIn",
    value: "linkedin.com/company/your-company",
    href: "https://www.linkedin.com/company/your-company",
    external: true,
  },
];

function Details() {
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
        backgroundColor: "#f5f7fb",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── CONTAINER ── */}
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

        <Box
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: "18px",
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.06)",
            position: "relative",
            overflow: "hidden",
            transition: "box-shadow 0.3s ease", // ✅ no transform — avoids fixed child issues
            "&:hover": {
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            },
          }}
        >
          {/* Gold accent bar ✅ brand color */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "4px",
              backgroundColor: "#FFC400",
              borderRadius: "18px 0 0 18px",
            }}
          />

          {/* Heading */}
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
              display: "block",
              mb: 1,
            }}
          >
            REACH US
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mb: { xs: 3, md: 4 },
              color: "#071b3f",
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
            }}
          >
            Contact Details
          </Typography>

          {/* Contact Items */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, md: 2 } }}>
            {contactItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: { xs: 1.5, md: 2 },
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,196,0,0.06)", // ✅ gold tint
                    transform: "translateX(6px)",
                  },
                }}
              >
                {/* Icon box ✅ gold themed */}
                <Box
                  sx={{
                    width: { xs: 38, md: 44 },
                    height: { xs: 38, md: 44 },
                    borderRadius: "10px", // ✅ rounded square vs circle
                    backgroundColor: "rgba(255,196,0,0.1)",
                    border: "1px solid rgba(255,196,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFC400", // ✅ gold icon
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
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      mb: 0.2,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Link
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    underline="none"
                    sx={{
                      color: "#555",
                      fontWeight: 500,
                      fontSize: { xs: "13px", md: "14px" },
                      display: "block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#071b3f" },
                    }}
                  >
                    {item.value}
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;