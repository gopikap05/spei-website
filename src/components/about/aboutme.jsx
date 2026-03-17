import { Box, Typography, Grid } from "@mui/material";

function AboutMe() {
  const highlights = [
    "30+ Years of Industrial Expertise",
    "Custom SPM Design & Development",
    "Automation & Integration Specialists",
    "Precision Engineering Standards",
    "Reliable & Cost-Effective Solutions",
  ];

  return (
    <>
      {/* ── SECTION 1: Main About ── */}
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" }, //  Mobile safety margin
          py: {
            xs: "40px",
            sm: "60px",
            md: "80px",
            lg: "100px",
          },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* ── CONTAINER ── */}
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">

            {/* TEXT CONTENT */}
            <Grid item xs={12} md={7}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#FFC400",
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: { xs: "11px", sm: "12px", md: "13px" },
                  }}
                >
                  ABOUT US
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    mt: 2,
                    mb: { xs: 3, md: 4 },
                    color: "#071b3f",
                    fontSize: {
                      xs: "22px",
                      sm: "26px",
                      md: "30px",
                      lg: "34px",
                    },
                    lineHeight: 1.3,
                  }}
                >
                  Engineering Excellence Backed by Experience
                </Typography>

                <Typography
                  sx={{
                    mb: 3,
                    lineHeight: 1.9,
                    color: "#555",
                    fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
                  }}
                >
                  With over <strong>30 years of hands-on experience</strong> in
                  industrial machinery, our company is built on a strong
                  foundation of technical expertise, innovation, and commitment
                  to excellence. We specialize in the design and manufacturing
                  of high-quality Special Purpose Machines (SPMs) tailored to
                  meet the specific requirements of Indian industries.
                </Typography>

                <Typography
                  sx={{
                    mb: 3,
                    lineHeight: 1.9,
                    color: "#555",
                    fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
                  }}
                >
                  Our deep understanding of industrial processes enables us to
                  develop reliable, efficient, and cost-effective automation
                  solutions that enhance productivity and operational performance.
                </Typography>

                <Typography
                  sx={{
                    lineHeight: 1.9,
                    color: "#555",
                    fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
                  }}
                >
                  We are committed to supporting India's manufacturing growth by
                  delivering precision-engineered machines that combine
                  durability, advanced technology, and practical design. Driven
                  by experience and powered by innovation, we aim to be a
                  trusted automation partner for industries across India.
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT SIDE (future image area) */}
            <Grid item xs={12} md={5} />

          </Grid>
        </Box>
      </Box>

      {/* ── SECTION 2: Why Choose Us Strip ── */}
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" }, //  Mobile safety margin
          py: {
            xs: "40px",
            sm: "60px",
            md: "80px",
            lg: "100px",
          },
          width: "100%",
          boxSizing: "border-box",
          background: "linear-gradient(135deg, #0b2a66 0%, #071b3f 100%)",
        }}
      >
        {/* ── CONTAINER ── */}
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: { xs: 2, sm: 2.5, md: 3 },
            }}
          >
            {highlights.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  p: { xs: 2.5, sm: 3, md: 3.5 },
                  textAlign: "center",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.13)",
                    borderColor: "rgba(255,196,0,0.35)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;