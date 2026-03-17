import Product from "../components/products/product";
import { Helmet } from "react-helmet-async";

function Products() {
  return (
    <>
      <Helmet>
        <title>SPM Machines & Industrial Automation | SP Engineers India</title>

        <meta
          name="description"
          content="Explore SP Engineers India products: custom Special Purpose Machines (SPM), hydraulic systems, and industrial automation solutions designed for high performance and efficiency in manufacturing."
        />

        <link rel="canonical" href="https://www.spei.in/products" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="SPM Machines & Industrial Automation | SP Engineers India" />
        <meta property="og:description" content="High-quality custom Special Purpose Machines, hydraulic systems, and industrial automation solutions for Indian manufacturers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spei.in/products" />
      </Helmet>

      <h1 style={{ display: "none" }}>
        Special Purpose Machines Manufacturer in India | Custom SPM, Hydraulic Systems & Industrial Automation Solutions
      </h1>

      <Product />
    </>
  );
}

export default Products;