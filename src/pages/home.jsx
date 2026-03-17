import HeroSection from "../components/home/herosection.jsx";
import AboutSection from "../components/home/about.jsx";
import MissionVision from "../components/home/mission-vission.jsx";
import ProductsSection from "../components/home/products.jsx";
import CTASection from "../components/home/cta.jsx";
import HowWeWork from "../components/home/HowWeWork";

import Breadcrumbs from "../components/common/breadcrumbs.jsx";

// ✅ ADD THIS
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>
          SP Engineers India | SPM Machine Manufacturer in India
        </title>

        <meta
          name="description"
          content="SP Engineers India is a trusted SPM machine manufacturer in India specializing in industrial automation, hydraulic systems, and machine refurbishment services."
        />

        <meta
          name="keywords"
          content="SPM machine manufacturer India, special purpose machines, industrial automation, hydraulic machines, machine refurbishment Hosur"
        />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph (for WhatsApp / social sharing) */}
        <meta property="og:title" content="SP Engineers India" />
        <meta
          property="og:description"
          content="SPM Machine Manufacturer in India with 30+ years experience"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/" />
      </Helmet>
      {/* ✅ SEO END */}

      {/* ✅ IMPORTANT: H1 for Google */}
      <h1 style={{ display: "none" }}>
        SPM Machine Manufacturer in India | SP Engineers India
      </h1>

      <Breadcrumbs />
      <HeroSection />
      <AboutSection />
      <MissionVision />
      <ProductsSection />
      <CTASection />
      <HowWeWork />
    </>
  );
}

export default Home;