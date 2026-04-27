import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import productData from "../../data/productData";
import ProductCard from "../products/ProductCard";

function ProductsSection() {
  const previewProducts = productData.slice(0, 2);

  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" },
        py: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
        backgroundColor: "#ffffff",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "100%", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "#7a6000", // ✅ was #D4AF37 (fails on white), now passes 4.5:1
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: "11px", sm: "12px", md: "13px" },
            }}
          >
            OUR PRODUCTS
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              mt: 2,
              color: "#071b3f",
              fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "36px" },
            }}
          >
            Special Purpose Machines & Automation Solutions
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#444", // ✅ was #666, darkened for better contrast
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
            }}
          >
            Explore our range of <strong>custom SPM machinery</strong> and{" "}
            <strong>industrial automation systems</strong> designed for precision
            engineering and manufacturing efficiency.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: { xs: "20px", sm: "24px", md: "32px", lg: "40px" },
          }}
        >
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>

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
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
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
                background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)",
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
            View All SPM Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductsSection;