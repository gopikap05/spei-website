import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/common/navbar";
import Breadcrumbs from "./components/common/breadcrumbs";
import Footer from "./components/common/footer";
import ScrollToTop from "./components/common/ScrollToTop";
import BackToTop from "./components/common/BackToTop";

import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Contact from "./pages/contact";
import ProductSingle from "./pages/productSingle";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

      {/* Main content wrapper */}
      <Box sx={{ pt: { xs: "80px", md: "90px" } }}>

        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductSingle />} />
        </Routes>

      </Box>

      <BackToTop />

      <Footer />
    </>
  );
}

export default App;