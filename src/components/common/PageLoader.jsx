import { useEffect, useState, memo } from "react";
import { Box, keyframes } from "@mui/material";
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
        willChange: 'transform', // Optimize for animation
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
  const [phase, setPhase] = useState("visible"); // visible → hiding → gone

  useEffect(() => {
    const hideTimer = setTimeout(() => setPhase("hiding"), 2400);
    const goneTimer = setTimeout(() => setPhase("gone"), 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  // Reduced from 10 to 6 bars for better performance
  const barHeights = [0.4, 0.75, 1, 0.6, 0.9, 0.5];

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
      {/* Moving grid — same as hero section */}
      <Box
        sx={{
          position: "absolute",
          inset: "-60px",
          backgroundImage:
            "linear-gradient(rgba(255,196,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,196,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: `${moveGrid} 20s linear infinite`,
          pointerEvents: "none",
          willChange: 'transform', // Optimize grid animation
        }}
      />

      {/* Radial gold glow at centre */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,196,0,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative gears — top-left */}
      <Box sx={{ position: "absolute", top: 28, left: 28, opacity: 0.18 }}>
        <Gear size={50} speed="6s" color="#FFC400" />
      </Box>
      <Box sx={{ position: "absolute", top: 54, left: 66, opacity: 0.11 }}>
        <Gear size={26} speed="4s" reverse color="#FFC400" />
      </Box>

      {/* Decorative gears — bottom-right */}
      <Box sx={{ position: "absolute", bottom: 28, right: 28, opacity: 0.18 }}>
        <Gear size={54} speed="7s" reverse color="#FFC400" />
      </Box>
      <Box sx={{ position: "absolute", bottom: 56, right: 72, opacity: 0.10 }}>
        <Gear size={28} speed="4.5s" color="#FFC400" />
      </Box>

      {/* Centre content */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          animation: `${fadeIn} 0.55s ease forwards`,
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="SPEI"
          onError={(e) => {
            e.target.style.display = "none";
            // Safely access next sibling
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = "flex";
            }
          }}
          sx={{
            height: { xs: 68, md: 80 },
            width: "auto",
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
            width: 80,
            height: 80,
            border: "2px solid #FFC400",
            borderRadius: "8px",
            color: "#FFC400",
            fontSize: "22px",
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
            gap: 0.6,
          }}
        >
          <Box
            sx={{
              color: "#FFC400",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            SP Engineers India
          </Box>
          <Box
            sx={{
              color: "rgba(255,255,255,0.3)",
              fontSize: { xs: "14px", md: "18px" },
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Industrial Automation
          </Box>
        </Box>

        {/* Progress bar */}
        <Box
          sx={{
            width: { xs: 220, md: 260 },
            height: "2px",
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background:
                "linear-gradient(90deg, #e6a800 0%, #FFC400 60%, #ffe066 100%)",
              borderRadius: "2px",
              animation: `${barGrow} 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
            }}
          />
          {/* Shimmer sweep */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "40%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              animation: `${scanLine} 1.6s ease-in-out infinite`,
            }}
          />
        </Box>

        {/* Equalizer animation bars - reduced from 10 to 6 for performance */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: "4px", // Slightly increased gap for better spacing with fewer bars
            height: 20,
          }}
        >
          {barHeights.map((height, index) => (
            <Box
              key={index}
              sx={{
                width: "3px",
                height: `${height * 20}px`,
                backgroundColor: "#FFC400",
                borderRadius: "1.5px",
                opacity: 0.65,
                animation: `${barPulse} ${0.75 + (index % 4) * 0.12}s ease-in-out infinite`,
                animationDelay: `${index * 0.07}s`,
                willChange: 'transform, opacity', // Optimize bar animations
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Bottom tagline */}
      <Box
        sx={{
          position: "absolute",
          bottom: 28,
          color: "rgba(255,255,255,0.15)",
          fontSize: "16px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        Precision · Innovation · Excellence
      </Box>
    </Box>
  );
}