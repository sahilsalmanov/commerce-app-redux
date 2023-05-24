import React, { useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PrivateProducts from './PrivateProducts';
import Basket from './Basket';
import { LoginContext } from '../PublicPages/LoginContext';
import Admin from './Admin';
import ProductsChanges from './ProductsChanges';
import Orders from './Orders';
import { CartProvider } from './BasketContext';
import NotFoundPage from '../../components/NotFoundPage';



function App() {

  const { loginStatus, setloginStatus } = useContext(LoginContext);
  let navigate = useNavigate();

  const handleProducts = () => {
    navigate('/');
  };

  const handleBasket = () => {
    navigate('/admin');
  };

  const signout = () => {
    setloginStatus(false);
    localStorage.setItem('login', false);
    navigate('/')
  }


  return (
    <div>

      <CartProvider>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={handleProducts} variant="h6" sx={{ flexGrow: 1 }}>
              Products
            </Button>
            <Button color="inherit" onClick={handleBasket}>
              Admin
            </Button>
            <Button color="inherit" onClick={signout}>
              SignOut
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<PrivateProducts />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/basket" element={<Basket />} />
          <Route path="/admin/productschanges" element={<ProductsChanges />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="*" element={<NotFoundPage />}></Route>

        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
