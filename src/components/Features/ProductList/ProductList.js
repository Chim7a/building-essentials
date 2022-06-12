import React from 'react';
import ProductData from "./ProductData.json";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductList = () => {
  return (
      <div className="Product">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        {ProductData.images.map((image, i) => (
        <ImageListItem key={i}>
          <img
            src={`${image.url}?w=248&fit=crop&auto=format`}
            srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=5 5x`}
            alt={image.description}
            loading="lazy"
          />
          <ImageListItemBar
            title={image.title}
            position="below"
          />
        </ImageListItem>
      ))}
      </CardContent>
    </Card>
      </div>
  )
}

export default ProductList;