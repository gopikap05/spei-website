import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import productData from "../../data/productData";
import ProductCard from "../products/ProductCard";

function ProductsSection() {
  const previewProducts = productData.slice(0, 2);

  return (
    // ── SECTION ──
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" }, // ✅ mobile safety margin
        py: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
        },
        backgroundColor: "#ffffff",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── CONTAINER ── */}
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "#FFC400",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" }, // ✅ responsive
            }}
          >
            OUR PRODUCTS
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mt: 2,
              color: "#071b3f",
              fontSize: {
                xs: "22px",
                sm: "26px",
                md: "30px",
                lg: "36px", // ✅ added lg
              },
            }}
          >
            Engineered Machinery Solutions
          </Typography>
        </Box>

        {/* Product Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)", // ✅ 2 cols from sm (was md)
            },
            gap: {
              xs: "20px",
              sm: "24px",
              md: "32px",
              lg: "40px", // ✅ smooth gap scale
            },
          }}
        >
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: { xs: 5, sm: 6, md: 8 } }}>
          <Button
            component={NavLink}
            to="/products"
            variant="contained"
            sx={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#071b3f",
              color: "white",
              px: { xs: 4, md: 5 },
              py: { xs: 1.3, md: 1.5 },
              fontWeight: 700,
              fontSize: { xs: "13px", sm: "14px", md: "15px" }, // ✅ responsive
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.35s ease",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)",
                transition: "all 0.6s ease",
              },
              "&:hover::before": { left: "100%" },
              "&:hover": {
                backgroundColor: "#0b2a66",
                transform: "translateY(-4px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              },
              "&:active": { transform: "scale(0.96)" },
            }}
          >
            View All Products
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default ProductsSection;