import { Box, Typography } from "@mui/material";
import ProductsList from "./productslist";

function Product() {
  return (
    // ── SECTION: full-width, px mobile safety margin ──
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" }, // ✅ moved from section, mobile safe
        py: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
        },
        background: "#f5f7fb",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ── CONTAINER ── */}
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

        {/* ── CONTENT ── */}
        <Typography
          variant="overline"
          sx={{
            color: "#FFC400",
            fontWeight: 800,
            letterSpacing: 2,
            fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "15px" },
          }}
        >
          OUR PRODUCTS
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            color: "#071b3f",
            mt: 2,
            mb: { xs: 4, sm: 5, md: 6 },
            fontSize: {
              xs: "22px",
              sm: "28px",
              md: "34px",
              lg: "40px",
            },
          }}
        >
          Industrial Machinery Solutions
        </Typography>

        <ProductsList />
      </Box>
    </Box>
  );
}

export default Product;