import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





function ProductListPage() {

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setproducts(res.data);
        setloading(false)
        console.log(products)
      })
  }


  function loginAlert() {
    alert('Please firstly you must login')
  }






  return (<>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {products.map((card, index) => (
        <Card key={index} sx={{ width: '350px', height: '500px', marginBottom: '20px', marginTop: '80px' }}>

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
          <CardActions>
            <Button onClick={loginAlert} style={{ backgroundColor: 'white', border: '1px solid blue', margin: '0 auto' }} size="small">Add to Basket</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </>
  )
}

export default ProductListPage


