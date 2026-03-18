import HeroSection from "../components/home/herosection.jsx";
import AboutSection from "../components/home/about.jsx";
import MissionVision from "../components/home/mission-vission.jsx";
import ProductsSection from "../components/home/products.jsx";
import CTASection from "../components/home/cta.jsx";
import HowWeWork from "../components/home/HowWeWork";

import Breadcrumbs from "../components/common/breadcrumbs.jsx";
import { Helmet } from "react-helmet-async";
import SchemaMarkup from "../components/common/SchemaMarkup";

function Home() {
  return (
    <>
      <Helmet>
        <title>SP Engineers India | Leading SPM Machine Manufacturer in India</title>

        <meta
          name="description"
          content="SP Engineers India is a trusted SPM machine manufacturer in India with 30+ years experience. We specialize in custom special purpose machines, industrial automation, hydraulic systems, and machine refurbishment services in Hosur."
        />

        <link rel="canonical" href="https://www.spei.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="SP Engineers India - SPM Machine Manufacturer" />
        <meta property="og:description" content="Custom special purpose machines and industrial automation solutions with 30+ years of engineering excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/" />
      </Helmet>
      <SchemaMarkup />

      <h1 style={{ display: "none" }}>SP Engineers India | SPM Machine Manufacturer in Hosur, India</h1>

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