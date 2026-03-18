import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Lenis from "@studio-freight/lenis";
import ReactGA from "react-ga4";

import Navbar from "./components/common/navbar";
import Breadcrumbs from "./components/common/breadcrumbs";
import Footer from "./components/common/footer";
import ScrollToTop from "./components/common/ScrollToTop";
import BackToTop from "./components/common/BackToTop";
import WhatsAppButton from "./components/common/WhatsAppButton";

import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Contact from "./pages/contact";
import ProductSingle from "./pages/productSingle";
import Careers from "./pages/careers";
import CareerSingle from "./pages/careerSingle";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-Q31XM6K6CH");
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Box sx={{ pt: { xs: "80px", md: "90px" } }}>
        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductSingle />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerSingle />} />
        </Routes>
      </Box>

      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;