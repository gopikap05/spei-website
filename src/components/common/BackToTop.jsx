import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Zoom in={show}>
      <Fab
        onClick={scrollTop}
        size="medium"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#071b3f",
          color: "white",
          zIndex: 1400,
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#0b2a5c",
            transform: "translateY(-4px)",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default BackToTop;