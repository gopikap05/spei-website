import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ImageLightbox from "../common/ImageLightbox";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s ease", //  only shadow, no transform
        "&:hover": {
          boxShadow: "0 16px 32px rgba(0,0,0,0.16)", //  no translateY — was breaking fixed
        },
      }}
    >
      {/* Image — lightbox, does NOT navigate */}
      <Box
        sx={{
          height: { xs: 190, sm: 210, md: 230, lg: 250 },
          overflow: "hidden",
          flexShrink: 0,
        }}
        onClick={(e) => e.preventDefault()}
      >
        <ImageLightbox
          src={product.cardImage}
          alt={product.title}
          sx={{ height: "100%" }}
        />
      </Box>

      {/* Card body — navigates to product page */}
      <CardContent
        component={NavLink}
        to={`/products/${product.id}`}
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 2.5, md: 3 },
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "15px", sm: "16px", md: "17px", lg: "18px" },
            color: "#071b3f",
            lineHeight: 1.4,
            mb: 0.5,
          }}
        >
          {product.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { xs: 1.5, md: 2 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              color: "#777",
            }}
          >
            SPEI Industrial Machine
          </Typography>

          <Button
            size="small"
            sx={{
              fontWeight: 600,
              color: "#071b3f",
              textTransform: "none",
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              minWidth: "auto",
              px: 1,
              transition: "color 0.2s ease",
              "&:hover": { color: "#FFC400", background: "none" },
            }}
          >
            See More →
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;