import { Box, Typography } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "We begin by deeply understanding your industrial process, production goals, and technical constraints through detailed consultations to design the perfect custom SPM solution.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Design & Engineer",
    description:
      "Our engineers design a custom SPM solution tailored precisely to your specifications — optimized for efficiency, safety, and reliability for your industrial automation needs.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Build & Deliver",
    description:
      "We manufacture, test, and deliver the special purpose machine to your facility — with full installation support and after-service assistance.",
    icon: "🚀",
  },
];

function HowWeWork() {
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
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 900,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
            }}
          >
            OUR PROCESS
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              mt: 1.5,
              color: "#071b3f",
              fontSize: {
                xs: "22px",
                sm: "26px",
                md: "30px",
                lg: "36px",
              },
            }}
          >
            How We Build Your SPM Solutions
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#666",
              maxWidth: "520px",
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
            }}
          >
            A simple, transparent process from first conversation to
            final delivery of your custom <strong>special purpose machine</strong> — built around your needs.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 3, sm: 2, md: 3 },
            alignItems: "stretch",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                position: "relative",
                backgroundColor: "#fff",
                border: "1px solid rgba(255,196,0,0.25)",
                borderRadius: "16px",
                p: { xs: 3, sm: 2.5, md: 3.5, lg: 4 },
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                transition: "all 0.35s ease",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  backgroundColor: "#FFC400",
                  borderRadius: "16px 0 0 16px",
                  transition: "width 0.35s ease",
                },
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                  borderColor: "rgba(255,196,0,0.6)",
                  "&::before": { width: "6px" },
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: { xs: 10, md: 14 },
                  right: { xs: 14, md: 18 },
                  fontWeight: 900,
                  color: "rgba(255,196,0,0.1)",
                  fontSize: { xs: "48px", sm: "42px", md: "58px" },
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {step.number}
              </Typography>

              <Box
                sx={{
                  width: { xs: 46, md: 52 },
                  height: { xs: 46, md: 52 },
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,196,0,0.1)",
                  border: "1px solid rgba(255,196,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: { xs: "20px", md: "24px" },
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                {step.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "10px", md: "11px" },
                  fontWeight: 700,
                  color: "#FFC400",
                  letterSpacing: 1.5,
                  mb: 0.8,
                  textTransform: "uppercase",
                }}
              >
                Step {step.number}
              </Typography>

              <Typography
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: "#071b3f",
                  mb: 1.2,
                  fontSize: { xs: "15px", sm: "14px", md: "16px", lg: "18px" },
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  lineHeight: 1.75,
                  fontSize: { xs: "13px", sm: "12px", md: "13px", lg: "14px" },
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          {steps.map((_, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#FFC400",
                  flexShrink: 0,
                }}
              />
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    width: { sm: "160px", md: "260px", lg: "360px" },
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #FFC400, rgba(255,196,0,0.2))",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}

export default HowWeWork;