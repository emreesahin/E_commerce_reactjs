import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";
import "../../styles/Products.scss";

const Products = ({ products }) => {
  return (
    <main>
      <div />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
