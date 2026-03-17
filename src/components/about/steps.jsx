import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
  {
    number: "01",
    title: "Design Engineering",
    description:
      "Our experienced design team develops innovative and efficient machine concepts tailored to specific production requirements.",
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "Equipped with modern manufacturing facilities, we produce high-quality machines built for durability, precision, and performance.",
  },
  {
    number: "03",
    title: "Quality Testing",
    description:
      "Every machine undergoes rigorous testing at multiple stages to ensure compliance with industrial standards and reliable operation.",
  },
  {
    number: "04",
    title: "Installation & Commissioning",
    description:
      "Our skilled professionals ensure smooth installation and timely commissioning at the client's site.",
  },
  {
    number: "05",
    title: "After-Sales Support",
    description:
      "We provide dependable after-sales service and technical support to ensure uninterrupted performance and long-term customer satisfaction.",
  },
    {
    number: "06",
    title: "Machine Refurbishment Services",
    description:
"At SP Engineers India, we refurbish and upgrade industrial machines to extend life, improve performance, and restore optimal efficiency."  },
];

function Steps() {
  return (
    <>
      {/* ── SECTION 1: Infrastructure ── */}
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" },
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
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
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
            OUR SETUP
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "#071b3f",
              fontSize: {
                xs: "22px",
                sm: "26px",
                md: "30px",
                lg: "34px",
              },
            }}
          >
            Infrastructure
          </Typography>

          <Box
            sx={{
              mb: { xs: 3, md: 4 },
              width: { xs: "48px", md: "64px" },
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />

          <Typography
            sx={{
              lineHeight: 1.9,
              color: "#555",
              maxWidth: "860px",
              fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
            }}
          >
            Our machine building section is located in the Hosur Industrial
            Area, known as the Tamil Nadu industrial manufacturing hub of India.
            Our setup includes a 3000 sq.ft building dedicated to machine
            assembly and inspection. We have a strong team of engineers along
            with experienced in-house machine builders including designers,
            fitters, welders, and electrical engineers.
          </Typography>
        </Box>
      </Box>

      {/* ── SECTION 2: Process Steps ── */}
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
            HOW WE DELIVER
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#071b3f",
              fontSize: {
                xs: "22px",
                sm: "26px",
                md: "30px",
                lg: "34px",
              },
            }}
          >
            Our Process
          </Typography>

          <Box
            sx={{
              mb: { xs: 5, md: 7 },
              width: { xs: "48px", md: "64px" },
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />

          {/* Steps - Animation Removed */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: isEven ? "row" : "row-reverse",
                  },
                  alignItems: "flex-start",
                  mb: { xs: 5, md: 8 },
                  gap: { xs: 2, md: 4 },
                  borderLeft: { xs: "3px solid #FFC400", md: "none" },
                  pl: { xs: 2.5, md: 0 },
                  "& > *": {
                    flexShrink: 0,
                  },
                }}
              >
                {/* Big number - Fixed sizing and alignment */}
                <Box
                  sx={{
                    width: { md: "180px", lg: "220px" },
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "64px", sm: "80px", md: "120px" },
                      fontWeight: 900,
                      color: "rgba(255,196,0,0.15)",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </Typography>
                </Box>

                {/* Content - Fixed padding and width */}
                <Box
                  sx={{
                    flex: 1,
                    maxWidth: { md: "calc(100% - 220px)" },
                    px: 0,
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "11px" },
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
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: "#071b3f",
                      fontSize: {
                        xs: "18px",
                        sm: "20px",
                        md: "22px",
                        lg: "24px",
                      },
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      lineHeight: 1.85,
                      color: "#555",
                      fontSize: {
                        xs: "13px",
                        sm: "14px",
                        md: "15px",
                        lg: "16px",
                      },
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Steps;