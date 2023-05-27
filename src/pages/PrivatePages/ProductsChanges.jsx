import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from './BasketContext';
import { Dialog, DialogActions, DialogTitle, TextField, DialogContent, DialogContentText } from '@mui/material';




function ProductsChanges() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [index, setIndex] = useState(1)
  const [products, setproducts] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle('')
    setCategory('')
    setPrice('')
    setDescription('')
    setImage('')
  };

  const handleClickOpen2 = (e) => {
    let value = e.target.value
    setIndex(value)
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
    setTitle('')
    setCategory('')
    setPrice('')
    setDescription('')
    setImage('')
  };



  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setproducts(res.data);
      })
  }

  function handleDelete(e) {
    let value = e.target.value
    axios.delete(`https://fakestoreapi.com/products/${value}`)
    loadData()
  }
  function handleEdit(e) {

    axios(`https://fakestoreapi.com/products/${index}`, {
      method: "PUT",
      body: JSON.stringify(
        {
          title: title,
          price: price,
          description: description,
          image: image,
          category: category
        }
      )
    })
    setTitle('')
    setCategory('')
    setPrice('')
    setDescription('')
    setImage('')
    loadData()
  }
  function handleCreate() {

    axios('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(
        {
          title: title,
          price: price,
          description: description,
          image: image,
          category: category
        }
      )

    })
    setTitle('')
    setCategory('')
    setPrice('')
    setDescription('')
    setImage('')
    loadData()
  }


  return (
    <>
      <div>
        <h3>Admin Panel</h3>
        <ul style={{ display: 'flex' }}>
          <li>
            <NavLink style={{ marginRight: '30px' }} to="/admin/basket">Basket</NavLink>
          </li>
          <li>
            <NavLink style={{ marginRight: '30px' }} to="/admin/productschanges">Products Changes</NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">Orders</NavLink>
          </li>
        </ul>
      </div>
      <h1>Products Changes</h1>

      <div>
        <Button variant="outlined" onClick={handleClickOpen} style={{ backgroundColor: 'green', color: 'black', marginLeft: '20px' }}>Create</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create</DialogTitle>
          <DialogContent>
            <TextField onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <TextField onChange={(e) => setPrice(e.target.value)}
              value={price}
              autoFocus
              margin="dense"
              id="name"
              label="Price"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <TextField onChange={(e) => setImage(e.target.value)}
              value={image}
              autoFocus
              margin="dense"
              id="name"
              label="Image"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <TextField onChange={(e) => setDescription(e.target.value)}
              value={description}
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <TextField onChange={(e) => setCategory(e.target.value)}
              value={category}
              autoFocus
              margin="dense"
              id="name"
              label="Category"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCreate}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {products.map((card, index) => (
          <tr>
            <td>{card.id}</td>
            <td>{card.title}</td>
            <td>{card.price}</td>
            <td>  <Button style={{ backgroundColor: 'red', color: 'black' }} value={card.id} onClick={handleDelete}>Delete</Button></td>
            <td><Button value={card.id} variant="outlined" onClick={handleClickOpen2} style={{ backgroundColor: 'yellow', color: 'black' }}>Edit</Button></td>
          </tr>

        ))}
      </table>
      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField onChange={(e) => setPrice(e.target.value)}
            value={price}
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField onChange={(e) => setImage(e.target.value)}
            value={image}
            autoFocus
            margin="dense"
            id="name"
            label="Image"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField onChange={(e) => setDescription(e.target.value)}
            value={description}
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField onChange={(e) => setCategory(e.target.value)}
            value={category}
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </DialogActions>
      </Dialog>


    </>
  )
}

export default ProductsChanges