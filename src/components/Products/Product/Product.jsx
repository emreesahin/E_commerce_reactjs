import React from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Rating,
    Button,
  } from "@mui/material";
  import { AddShoppingCart } from "@mui/icons-material";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const Product = ({ product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card>
      <CardMedia  image={product.media.source} title={product.name} />
      <CardContent>
        <div >
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;