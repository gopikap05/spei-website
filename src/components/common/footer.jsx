import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const logo = `${import.meta.env.BASE_URL}logo/logo.webp`;

function Footer() {
  const navigate = useNavigate();

  const fullAddress =
    "Plot No: 22, SF No: 579/5A1, Rajaji Layout, Rajsriya U-8 Back Side, Hosur Taluk, Krishnagiri District - 635126";

  const locationQuery = encodeURIComponent(fullAddress);
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${locationQuery}`;

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate(path);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#071b3f",
        color: "white",
        px: { xs: "16px", sm: "5%" },
        pt: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
        },
        pb: 4,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "100%", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
          <Box sx={{ maxWidth: { xs: "80%", md: 420 } }}>
            <Box
              onClick={() => handleNavigation("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="SP Engineers India - SPM Machine Manufacturer Logo"
                sx={{ height: { xs: 38, sm: 42, md: 50 }, mr: 2 }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                }}
              >
                SP Engineers India
              </Typography>
            </Box>

            <Typography
              sx={{
                opacity: 0.85,
                lineHeight: 1.7,
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
              }}
            >
              SP Engineers India specializes in manufacturing
              precision-engineered <strong>Special Purpose Machines</strong> designed to
              optimize industrial productivity and automation efficiency.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 4, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 1.5, md: 2, lg: 2 },
                  color: "#FFC400",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                }}
              >
                Quick Links
              </Typography>

              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Contact", path: "/contact" },
              ].map((item, i) => (
                <Typography key={i} sx={{ mb: 1.5 }}>
                  <Link
                    component="button"
                    underline="none"
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: "white",
                      opacity: 0.8,
                      cursor: "pointer",
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      background: "none",
                      border: "none",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#FFC400", opacity: 1 },
                    }}
                  >
                    {item.label}
                  </Link>
                </Typography>
              ))}
            </Box>

            {/* Legal / Policies Section */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 1.5, md: 2, lg: 2 },
                  color: "#FFC400",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                }}
              >
                Legal
              </Typography>

              {[
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms & Conditions", path: "/terms-and-conditions" },
                { label: "Cookie Policy", path: "/cookie-policy" },
              ].map((item, i) => (
                <Typography key={i} sx={{ mb: 1.5 }}>
                  <Link
                    component="button"
                    underline="none"
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: "white",
                      opacity: 0.8,
                      cursor: "pointer",
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      background: "none",
                      border: "none",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#FFC400", opacity: 1 },
                    }}
                  >
                    {item.label}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: { xs: 1.5, sm: 1.5, md: 2, lg: 2 },
                  color: "#FFC400",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                }}
              >
                Contact
              </Typography>

              {[
                {
                  icon: "📍",
                  label: (
                    <>
                      Plot No: 22, SF No: 579/5A1,<br />
                      Rajaji Layout, Rajsriya U-8 Back Side,<br />
                      Hosur Taluk, Krishnagiri District - 635126
                    </>
                  ),
                  href: mapLink,
                  external: true,
                },
                {
                  icon: "📞",
                  label: "9500990032",
                  href: "tel:9500990032",
                },
                {
                  icon: "✉️",
                  label: "spengineersindia2001@gmail.com",
                  href: "mailto:spengineersindia2001@gmail.com",
                },
              ].map((item, i, arr) => (
                <Typography key={i} sx={{ mb: i < arr.length - 1 ? 1.5 : 0 }}>
                  <Link
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    underline="none"
                    sx={{
                      color: "white",
                      opacity: 0.85,
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                      lineHeight: 1.6,
                      wordBreak: "break-word",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#FFC400", opacity: 1 },
                    }}
                  >
                    <Box component="span" sx={{ flexShrink: 0 }}>
                      {item.icon}
                    </Box>
                    {item.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: { xs: 4, md: 6 },
            pt: 3,
            textAlign: "center",
            opacity: 0.7,
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
          }}
        >
          © {new Date().getFullYear()} SP Engineers India. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;