import React from "react";
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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../../styles/Card.scss";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Shoes",
      description: "Runnig Shoes",
      price: 999 + " ₺",
      imageSrc:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e98d86bf-ee48-4e93-9e54-4f6aaec4c2d2/quest-4-mens-road-running-shoes-RlpLvS.png",
    },
    {
      id: 2,
      name: "Macbook",
      description: "Apple Macbook",
      price: 9999999 + " ₺",
      imageSrc:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mgn63tua-apple-macbook-air-13-apple-m1-8gb-256gb-ssd-uzay-grisi-mgn63tua-637883992972944390.jpg",
    },
    {
      id: 3,
      name: "Shoes",
      description: "Runnig Shoes",
      price: 999 + " ₺",
      imageSrc:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e98d86bf-ee48-4e93-9e54-4f6aaec4c2d2/quest-4-mens-road-running-shoes-RlpLvS.png",
    },
    {
      id: 4,
      name: "Macbook",
      description: "Apple Macbook",
      price: 9999999 + " ₺",
      imageSrc:
        "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mgn63tua-apple-macbook-air-13-apple-m1-8gb-256gb-ssd-uzay-grisi-mgn63tua-637883992972944390.jpg",
    },
  ];

  return (
    <main>
      <Grid container  spacing={1} justify="center" align="center" className="wrapper">
        {products.map((product) => (
              <Grid xs={12} sm={6} md={4} lg={3}>
                <Card className="products-card">
                  <div className="card">
                    <CardMedia
                      className="product-image"
                      image={product.imageSrc}
                      title="title"
                    />
                    <CardContent>
                      <div className="card-container">
                        <Typography variant="h2">{product.name}</Typography>
                        <Typography variant="body1">{product.description}</Typography>
                      </div>
                    </CardContent>
                  </div>
                  <Rating name="read-only" value={3} readOnly className="rating" />
                  <Typography className="price">{product.price}</Typography>
                  <CardActions className="wrapper">
                    <Button variant="contained">
                      <Typography marginRight='10px' className="typography">Sepete Ekle</Typography><AddShoppingCart />
                    </Button>
                    <IconButton aria-label="Add to Cart">
                      <FavoriteBorderIcon marginRight='1px' />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
