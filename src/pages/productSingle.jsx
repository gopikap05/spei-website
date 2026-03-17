import { useParams, NavLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import productData from "../data/productData";
import ImageLightbox from "../components/common/ImageLightbox";

function ProductSingle() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return (
      <Box
        sx={{
          px: { xs: "16px", sm: "5%" },
          py: { xs: "60px", md: "100px" },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#071b3f",
              fontSize: { xs: "22px", md: "32px" },
            }}
          >
            Product not found
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      {/* ── SECTION 1: Product Content ── */}
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
        {/* ── CONTAINER ── */}
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
          
          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#071b3f",
              mb: { xs: 3, md: 5 },
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "34px",
                lg: "40px",
              },
            }}
          >
            {product.title}
          </Typography>

          {/*  Image + Description Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 6 },
              alignItems: "center",
            }}
          >
            {/* Image */}
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <ImageLightbox
                src={product.singleImage}
                alt={product.title}
                sx={{
                  width: "100%",
                  height: {
                    xs: "220px",
                    sm: "300px",
                    md: "380px",
                    lg: "450px",
                  },
                  objectFit: "cover",
                  borderRadius: { xs: "8px", md: "12px" },
                }}
              />
            </Box>

            {/* Description */}
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                sx={{
                  lineHeight: 1.8,
                  color: "#555",
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "17px",
                  },
                }}
              >
                {product.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── SECTION 2: CTA ── */}
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
        {/* ── CONTAINER ── */}
        <Box sx={{ maxWidth: "1350px", width: "100%", mx: "auto" }}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #071b3f 0%, #0b2a66 100%)",
              color: "white",
              borderRadius: { xs: "12px", md: "16px" },
              textAlign: "center",
              py: { xs: 4, sm: 5, md: 6 },
              px: { xs: 3, sm: 5, md: 8 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "28px",
                  lg: "32px",
                },
              }}
            >
              Interested in this product?
            </Typography>

            <Typography
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: { xs: 3, md: 4 },
                opacity: 0.9,
                fontSize: { xs: "13px", sm: "14px", md: "16px" },
                lineHeight: 1.7,
              }}
            >
              Contact our team to discuss your requirements and get a
              customized solution for your industrial application.
            </Typography>

            <Button
              component={NavLink}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: "#FFC400",
                color: "#071b3f",
                fontWeight: 700,
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
                px: { xs: 4, md: 5 },
                py: { xs: 1.3, md: 1.6 },
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e6b000",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductSingle;