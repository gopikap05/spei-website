import { Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

function MissionVision() {
  const cards = [
    {
      number: "01",
      icon: (
        <RocketLaunchIcon
          sx={{ fontSize: { xs: "26px", md: "30px" }, color: "#FFC400" }}
        />
      ),
      title: "Our Vision",
      content: "text",
      text: "To become a leading and most trusted world-class Special Purpose Machine manufacturer in India, delivering innovative industrial automation solutions that enhance productivity, efficiency, and technological advancement across manufacturing sectors.",
    },
    {
      number: "02",
      icon: (
        <TrackChangesIcon
          sx={{ fontSize: { xs: "26px", md: "30px" }, color: "#FFC400" }}
        />
      ),
      title: "Our Mission",
      content: "list",
      items: [
        "Design and manufacture high-quality, custom Special Purpose Machines tailored to specific industrial requirements",
        "Deliver innovative automation solutions that improve productivity, accuracy, and cost-efficiency for Indian manufacturers",
        "Maintain uncompromising standards in quality, safety, and reliability across all SPM machinery",
      ],
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" },
        py: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
        width: "100%",
        background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
        color: "white",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,196,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: "1350px",
          width: "100%",
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
            }}
          >
            OUR FOUNDATION
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              mt: 1.5,
              fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "34px" },
            }}
          >
            Vision & Mission
          </Typography>

          <Box
            sx={{
              mx: "auto",
              mt: 2,
              mb: 2,
              width: { xs: "48px", md: "64px" },
              height: "3px",
              borderRadius: "2px",
              backgroundColor: "#FFC400",
            }}
          />

          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              maxWidth: "400px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            The principles and purpose that drive everything we build at SP
            Engineers India.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 3,
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                transition: "all 0.35s ease",
                // "&:hover": {
                //   backgroundColor: "rgba(255,255,255,0.09)",
                //   borderColor: "rgba(255,196,0,0.35)",
                //   transform: "translateY(-4px)",
                //   boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                // },
                // top gold accent bar
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #FFC400, rgba(255,196,0,0.15))",
                  borderRadius: "3px 3px 0 0",
                },
              }}
            >
              {/* Ghost number */}
              {/* <Typography
                sx={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  fontSize: { xs: "56px", md: "72px" },
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "rgba(255,196,0,0.06)",
                  userSelect: "none",
                  letterSpacing: "-2px",
                }}
              >
                {card.number}
              </Typography> */}

              {/* Icon */}
              <Box
                sx={{
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,196,0,0.1)",
                  border: "1px solid rgba(255,196,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                {card.icon}
              </Box>

              {/* Title */}
              <Typography
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "#FFC400",
                  fontSize: { xs: "17px", sm: "19px", md: "21px" },
                }}
              >
                {card.title}
              </Typography>

              {/* Short gold divider */}
              <Box
                sx={{
                  width: "32px",
                  height: "2px",
                  backgroundColor: "rgba(255,196,0,0.4)",
                  borderRadius: "2px",
                  mb: 2.5,
                }}
              />

              {/* Content */}
              {card.content === "list" ? (
                <Box sx={{ opacity: 0.9 }}>
                  {card.items.map((text, i) => (
                    <Typography
                      key={i}
                      sx={{
                        mb: i < card.items.length - 1 ? 2 : 0,
                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                        lineHeight: 1.8,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Diamond bullet */}
                      <Box
                        component="span"
                        sx={{
                          flexShrink: 0,
                          mt: "7px",
                          width: "6px",
                          height: "6px",
                          backgroundColor: "#FFC400",
                          transform: "rotate(45deg)",
                          display: "inline-block",
                        }}
                      />
                      {text}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography
                  sx={{
                    lineHeight: 1.85,
                    opacity: 0.9,
                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                  }}
                >
                  {card.text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default MissionVision;