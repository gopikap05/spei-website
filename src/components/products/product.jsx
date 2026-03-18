import { Box, Typography } from "@mui/material";
import ProductsList from "./productslist";

function Product() {
  return (
    <Box
      sx={{
        px: { xs: "16px", sm: "5%" },
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
      <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>

        <Typography
          variant="overline"
          sx={{
            color: "#D4AF37",
            fontWeight: 800,
            letterSpacing: 2,
            fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "15px" },
          }}
        >
          OUR PRODUCTS
        </Typography>

        <Typography
          component="h1"
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
          Special Purpose Machines & Industrial Automation Solutions
        </Typography>

        <Typography
          sx={{
            mb: 4,
            color: "#555",
            maxWidth: "800px",
            lineHeight: 1.8,
            fontSize: { xs: "13px", sm: "14px", md: "15px" },
          }}
        >
          Explore our comprehensive range of <strong>custom SPM machinery</strong>, 
          <strong> hydraulic systems</strong>, and <strong>industrial automation solutions </strong> 
          designed for precision engineering and manufacturing efficiency across industries.
        </Typography>

        <ProductsList />
      </Box>
    </Box>
  );
}

export default Product;