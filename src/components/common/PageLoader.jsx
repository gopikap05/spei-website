import { useEffect, useState, memo } from "react";
import { Box, keyframes, useMediaQuery, useTheme } from "@mui/material";
import logo from "/logo/logo.webp";

/* Animations */
const moveGrid = keyframes`
  from { transform: translate(0, 0); }
  to   { transform: translate(60px, 60px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const barGrow = keyframes`
  0%   { width: 0%; }
  25%  { width: 35%; }
  55%  { width: 65%; }
  80%  { width: 85%; }
  100% { width: 100%; }
`;

const scanLine = keyframes`
  0%   { left: -40%; }
  100% { left: 110%; }
`;

const gearSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const gearSpinReverse = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
`;

const barPulse = keyframes`
  0%, 80%, 100% { opacity: 0.2; transform: scaleY(0.4); }
  40%           { opacity: 1;   transform: scaleY(1); }
`;

/* Responsive gear sizes based on screen */
const getGearSizes = (isMobile, isTablet) => {
  if (isMobile) {
    return { large: 32, medium: 20, small: 16 };
  }
  if (isTablet) {
    return { large: 42, medium: 24, small: 18 };
  }
  return { large: 54, medium: 28, small: 22 };
};

/* Memoized SVG gear component for better performance */
const Gear = memo(({ size = 28, speed = "2s", reverse = false, color = "#FFC400", opacity = 1 }) => {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={{
        width: size,
        height: size,
        opacity,
        animation: `${reverse ? gearSpinReverse : gearSpin} ${speed} linear infinite`,
        flexShrink: 0,
        willChange: 'transform',
      }}
    >
      <path
        fill={color}
        d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.34.07-.69.07-1.08s-.03-.74-.07-1.08l2.32-1.82c.21-.16.27-.46.13-.7l-2.2-3.81c-.13-.24-.42-.32-.66-.24l-2.74 1.1c-.57-.44-1.18-.81-1.86-1.08l-.42-2.92C14.16 2.18 13.9 2 13.6 2h-4.4c-.3 0-.56.18-.6.44L8.18 5.36c-.68.27-1.29.64-1.86 1.08L3.58 5.34c-.24-.08-.53 0-.66.24L.72 9.39c-.14.24-.08.54.13.7l2.32 1.82c-.04.34-.07.7-.07 1.09s.03.74.07 1.08L.85 15.9c-.21.16-.27.46-.13.7l2.2 3.81c.13.24.42.32.66.24l2.74-1.1c.57.44 1.18.81 1.86 1.08l.42 2.92c.04.26.3.44.6.44h4.4c.3 0 .56-.18.6-.44l.42-2.92c.68-.27 1.29-.64 1.86-1.08l2.74 1.1c.24.08.53 0 .66-.24l2.2-3.81c.14-.24.08-.54-.13-.7l-2.32-1.81Z"
      />
    </Box>
  );
});

Gear.displayName = 'Gear';

/* Main component */
export default function PageLoader() {
  const [phase, setPhase] = useState("visible");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const gearSizes = getGearSizes(isMobile, isTablet);

  useEffect(() => {
    const hideTimer = setTimeout(() => setPhase("hiding"), 2400);
    const goneTimer = setTimeout(() => setPhase("gone"), 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  // Responsive bar heights - fewer bars on mobile for better performance
  const getBarHeights = () => {
    if (isMobile) return [0.5, 0.8, 0.6, 0.9]; // 4 bars on mobile
    if (isTablet) return [0.4, 0.75, 1, 0.6, 0.9, 0.5]; // 6 bars on tablet
    return [0.4, 0.75, 1, 0.6, 0.9, 0.5, 0.7, 0.85]; // 8 bars on desktop
  };

  const barHeights = getBarHeights();

  // Responsive positioning for decorative elements
  const getDecoPosition = () => {
    if (isMobile) {
      return {
        topLeft1: { top: 16, left: 16 },
        topLeft2: { top: 32, left: 42 },
        bottomRight1: { bottom: 16, right: 16 },
        bottomRight2: { bottom: 32, right: 44 },
      };
    }
    if (isTablet) {
      return {
        topLeft1: { top: 24, left: 24 },
        topLeft2: { top: 48, left: 58 },
        bottomRight1: { bottom: 24, right: 24 },
        bottomRight2: { bottom: 48, right: 64 },
      };
    }
    return {
      topLeft1: { top: 28, left: 28 },
      topLeft2: { top: 54, left: 66 },
      bottomRight1: { bottom: 28, right: 28 },
      bottomRight2: { bottom: 56, right: 72 },
    };
  };

  const decoPos = getDecoPosition();

  // Responsive glow size
  const getGlowSize = () => {
    if (isMobile) return 300;
    if (isTablet) return 400;
    return 500;
  };

  // Responsive bottom tagline
  const getBottomPosition = () => {
    if (isMobile) return 16;
    if (isTablet) return 22;
    return 28;
  };

  // Responsive gap between elements
  const getContentGap = () => {
    if (isMobile) return 2;
    return 3;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#071b3f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation: phase === "hiding" ? `${fadeOut} 0.6s ease forwards` : "none",
      }}
    >
      {/* Moving grid */}
      <Box
        sx={{
          position: "absolute",
          inset: "-60px",
          backgroundImage:
            "linear-gradient(rgba(255,196,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,0.06) 1px, transparent 1px)",
          backgroundSize: {
            xs: "40px 40px", // Faster grid on mobile
            sm: "50px 50px",
            md: "60px 60px"
          },
          animation: `${moveGrid} ${isMobile ? '12s' : '20s'} linear infinite`,
          pointerEvents: "none",
          willChange: 'transform',
        }}
      />

      {/* Radial gold glow at centre */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: getGlowSize(),
          height: getGlowSize(),
          borderRadius: "50%",
          background: {
            xs: "radial-gradient(circle, rgba(255,196,0,0.05) 0%, transparent 70%)",
            md: "radial-gradient(circle, rgba(255,196,0,0.08) 0%, transparent 68%)"
          },
          pointerEvents: "none",
        }}
      />

      {/* Decorative gears - responsive positioning and sizing */}
      <Box sx={{ position: "absolute", top: decoPos.topLeft1.top, left: decoPos.topLeft1.left, opacity: { xs: 0.12, md: 0.18 } }}>
        <Gear size={gearSizes.large} speed={isMobile ? "4s" : "6s"} color="#FFC400" />
      </Box>
      <Box sx={{ position: "absolute", top: decoPos.topLeft2.top, left: decoPos.topLeft2.left, opacity: { xs: 0.08, md: 0.11 } }}>
        <Gear size={gearSizes.medium} speed={isMobile ? "3s" : "4s"} reverse color="#FFC400" />
      </Box>

      <Box sx={{ position: "absolute", bottom: decoPos.bottomRight1.bottom, right: decoPos.bottomRight1.right, opacity: { xs: 0.12, md: 0.18 } }}>
        <Gear size={gearSizes.large} speed={isMobile ? "4.5s" : "7s"} reverse color="#FFC400" />
      </Box>
      <Box sx={{ position: "absolute", bottom: decoPos.bottomRight2.bottom, right: decoPos.bottomRight2.right, opacity: { xs: 0.07, md: 0.10 } }}>
        <Gear size={gearSizes.small} speed={isMobile ? "3s" : "4.5s"} color="#FFC400" />
      </Box>

      {/* Centre content */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: getContentGap(),
          animation: `${fadeIn} 0.55s ease forwards`,
          px: { xs: 2, sm: 3 },
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="SPEI"
          onError={(e) => {
            e.target.style.display = "none";
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = "flex";
            }
          }}
          sx={{
            height: {
              xs: 50,
              sm: 65,
              md: 80
            },
            width: "auto",
            maxWidth: {
              xs: "80%",
              sm: "auto"
            },
            objectFit: "contain",
            filter: "drop-shadow(0 0 20px rgba(255,196,0,0.4))",
          }}
        />

        {/* Text fallback if image fails */}
        <Box
          sx={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            border: "2px solid #FFC400",
            borderRadius: "8px",
            color: "#FFC400",
            fontSize: { xs: "18px", md: "22px" },
            fontWeight: 800,
            letterSpacing: "0.1em",
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          SPEI
        </Box>

        {/* Brand labels */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 0.4, sm: 0.6 },
          }}
        >
          <Box
            sx={{
              color: "#FFC400",
              fontSize: {
                xs: "12px",
                sm: "16px",
                md: "20px"
              },
              fontWeight: 700,
              letterSpacing: {
                xs: "0.2em",
                sm: "0.25em",
                md: "0.3em"
              },
              textTransform: "uppercase",
              fontFamily: "'Manrope', sans-serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: {
                xs: "200px",
                sm: "300px",
                md: "none"
              },
            }}
          >
            SP Engineers India
          </Box>
          <Box
            sx={{
              color: "rgba(255,255,255,0.3)",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "18px"
              },
              letterSpacing: {
                xs: "0.15em",
                sm: "0.18em",
                md: "0.2em"
              },
              textTransform: "uppercase",
              fontFamily: "'Manrope', sans-serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: {
                xs: "180px",
                sm: "280px",
                md: "none"
              },
            }}
          >
            Industrial Automation
          </Box>
        </Box>

        {/* Progress bar */}
        <Box
          sx={{
            width: {
              xs: 180,
              sm: 220,
              md: 260,
              lg: 300
            },
            height: {
              xs: "1.5px",
              md: "2px"
            },
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: "linear-gradient(90deg, #e6a800 0%, #FFC400 60%, #ffe066 100%)",
              borderRadius: "2px",
              animation: `${barGrow} 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
            }}
          />
          {/* Shimmer sweep - hidden on mobile for performance */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                width: "40%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                animation: `${scanLine} 1.6s ease-in-out infinite`,
              }}
            />
          )}
        </Box>

        {/* Equalizer animation bars - responsive count */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: {
              xs: "3px",
              sm: "4px",
              md: "5px"
            },
            height: {
              xs: 16,
              sm: 18,
              md: 20
            },
          }}
        >
          {barHeights.map((height, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "2px",
                  sm: "2.5px",
                  md: "3px"
                },
                height: {
                  xs: `${height * 16}px`,
                  sm: `${height * 18}px`,
                  md: `${height * 20}px`
                },
                backgroundColor: "#FFC400",
                borderRadius: "1.5px",
                opacity: 0.65,
                animation: `${barPulse} ${0.75 + (index % 4) * 0.12}s ease-in-out infinite`,
                animationDelay: `${index * 0.07}s`,
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Bottom tagline */}
      <Box
        sx={{
          position: "absolute",
          bottom: getBottomPosition(),
          color: "rgba(255,255,255,0.15)",
          fontSize: {
            xs: "10px",
            sm: "13px",
            md: "16px"
          },
          letterSpacing: {
            xs: "0.15em",
            sm: "0.18em",
            md: "0.22em"
          },
          textTransform: "uppercase",
          fontFamily: "'Manrope', sans-serif",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: {
            xs: "280px",
            sm: "400px",
            md: "none"
          },
          px: { xs: 2, sm: 3 },
        }}
      >
        Precision · Innovation · Excellence
      </Box>
    </Box>
  );
}