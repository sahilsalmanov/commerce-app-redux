import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/actions/actions';

function PrivateProducts() {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleCartButton = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setproducts(res.data);
        setloading(false);
      });
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map((card, index) => (
          <Card key={card.id} sx={{ width: '350px', height: '500px', marginBottom: '20px', marginTop: '80px' }}>
            <div style={{ width: '165px', height: '220px', margin: ' 0 auto', marginTop: '30px' }}>
              <img
                alt="green iguana"
                style={{ width: '100%', height: '100%' }}
                src={card.image}
              />
            </div>
            <CardContent>
              <Typography style={{ height: '70px', fontSize: '18px', textAlign: 'center' }} gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography style={{ fontWeight: 600, color: 'red', marginLeft: '30px', marginTop: '30px' }} variant="body2" color="text.secondary">
                {card.price} $
              </Typography>
            </CardContent>
            <Button style={{ backgroundColor: 'white', border: '1px solid blue', marginLeft: '90px' }} onClick={() => handleCartButton(card)}>
              {isProductInCart(card.id) ? 'Remove from Cart' : 'Add to Cart'}
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default PrivateProducts;
