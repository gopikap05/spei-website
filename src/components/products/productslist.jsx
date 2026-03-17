import { Box, Typography, Pagination } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../../data/productData";

const PRODUCTS_PER_PAGE = 4;

function ProductsList() {
  const [page, setPage] = useState(1);

  const totalProducts = productData.length;
  const pageCount = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = productData.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <Box
        sx={{
          mb: { xs: 3, md: 4 },
          color: "#555",
          fontWeight: 500,
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        Showing {startIndex + 1}-
        {Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts)} of{" "}
        <strong>{totalProducts} SPM Machines & Automation Solutions</strong>
      </Box> */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: "24px", md: "40px" },
        }}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 4, md: 6 },
        }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          color="primary"
          aria-label="Product pagination"
        />
      </Box>
    </>
  );
}

export default ProductsList;