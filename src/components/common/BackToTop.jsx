import { useState, useEffect } from "react";
import { Zoom, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function BackToTop() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setShow(scrollTop > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const size = 52;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <Zoom in={show}>
      <Box
        onClick={scrollTop}
        role="button"
        aria-label="Back to top"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollTop()}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 1400,
          width: size,
          height: size,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover .fab-inner": {
            backgroundColor: "#0b2a5c",
          },
        }}
      >
        {/* Scroll progress ring */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotate(-90deg)",
            pointerEvents: "none",
          }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#FFC400"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>

        {/* Button core */}
        <Box
          className="fab-inner"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#071b3f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(7, 27, 63, 0.55)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
        >
          <KeyboardArrowUpIcon sx={{ color: "white", fontSize: 22 }} />
        </Box>
      </Box>
    </Zoom>
  );
}

export default BackToTop;