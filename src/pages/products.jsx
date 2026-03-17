import Product from "../components/products/product";

// ✅ ADD THIS
import { Helmet } from "react-helmet-async";

function Products() {
  return (
    <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>
          SPM Machines & Industrial Automation | SP Engineers India
        </title>

        <meta
          name="description"
          content="Explore SP Engineers India products including Special Purpose Machines (SPM), hydraulic systems, and industrial automation solutions designed for high performance and efficiency."
        />

        <meta
          name="keywords"
          content="SPM machines India, special purpose machines, industrial automation, hydraulic press machines, custom machinery India"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="SPM Machines | SP Engineers India" />
        <meta
          property="og:description"
          content="High-quality Special Purpose Machines and automation solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/products" />
      </Helmet>
      {/* ✅ SEO END */}

      {/* ✅ H1 for SEO */}
      <h1 style={{ display: "none" }}>
        Special Purpose Machines Manufacturer in India | SP Engineers India
      </h1>

      <Product />
    </>
  );
}

export default Products;