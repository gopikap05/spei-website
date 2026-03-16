import HeroSection from "../components/home/herosection.jsx";
import AboutSection from "../components/home/about.jsx";
import MissionVision from "../components/home/mission-vission.jsx";
import ProductsSection from "../components/home/products.jsx";
import CTASection from "../components/home/cta.jsx";
import HowWeWork from "../components/home/HowWeWork";

import Breadcrumbs from "../components/common/breadcrumbs.jsx";

function Home() {
  return (
    <>
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