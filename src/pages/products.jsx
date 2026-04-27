import { Box, Typography } from "@mui/material";
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
        <meta property="og:image" content="https://www.spei.in/og-image.jpg" />
      </Helmet>

      <h1 style={{ display: "none" }}>
        Special Purpose Machines Manufacturer in India | Custom SPM, Hydraulic Systems & Industrial Automation Solutions
      </h1>

      {/* Hero Section - Same as Careers page */}
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" },
          pt: { xs: "65px", sm: "90px", md: "80px", lg: "100px" },
          pb: { xs: "40px", sm: "60px", md: "70px", lg: "80px" },
          background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
          color: "white",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >

        <Box sx={{ maxWidth: "1440px", width: "100%", mx: "auto", position: "relative", zIndex: 1 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: "#FFC400", 
              fontWeight: 700, 
              letterSpacing: 2, 
              fontSize: { xs: "11px", sm: "12px", md: "13px" }, 
              display: "block", 
              mb: 1.5 
            }}
          >
            EXPLORE OUR RANGE
          </Typography>

          <Typography 
            sx={{ 
              fontWeight: 700, 
              color: "white", 
              lineHeight: 1.2, 
              fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" } 
            }}
          >
            Products at SPEI
          </Typography>

          <Box 
            sx={{ 
              mt: 3, 
              width: { xs: "48px", md: "64px" }, 
              height: "4px", 
              borderRadius: "2px", 
              backgroundColor: "#FFC400" 
            }} 
          />
        </Box>
      </Box>

      <Product />
    </>
  );
}

export default Products;