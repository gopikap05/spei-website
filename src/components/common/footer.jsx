import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const logo = "/logo/logo.jpeg";

function Footer() {
  const navigate = useNavigate();

  const locationQuery = encodeURIComponent("Hosur, Tamil Nadu, India");
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${locationQuery}`;

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate(path);
  };

  return (
    // ── SECTION: full-width, py only, px: 16px on xs / 5% on sm+ ──
    <Box
      sx={{
        backgroundColor: "#071b3f",
        color: "white",
        // ❌ Removed px: "5%" from here
        px: { xs: "16px", sm: "5%" }, // ✅ Mobile safety margin
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
      {/* ── CONTAINER: max-width 1350px, centered ── */}
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

        {/* ── CONTENT: Main Row ── */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 0 },
          }}
        >
          {/* LEFT: Brand */}
          <Box sx={{ maxWidth: { xs: "100%", md: 420 } }}>
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
                alt="SP Engineers India Logo"
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
              precision-engineered Special Purpose Machines designed to
              optimize industrial productivity and automation efficiency.
            </Typography>
          </Box>

          {/* RIGHT: Links + Contact */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 4, sm: 6, md: 10 },
            }}
          >
            {/* Quick Links */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 3,
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

            {/* Contact */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#FFC400",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                }}
              >
                Contact
              </Typography>

              {[
                {
                  icon: "📍",
                  label: "Hosur, Tamil Nadu, India",
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

        {/* ── Bottom Strip ── */}
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