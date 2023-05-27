import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProductListPage from './ProductListPage';
import NotFoundPage from '../../components/NotFoundPage';



function App() {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('userList');
    if (storedUsers) {
      setUserList(JSON.parse(storedUsers));
    }
  }, []);
  
  let navigate = useNavigate();

  const handleProducts = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const addUser = (user) => {
    const updatedUserList = [...userList, user];
    setUserList(updatedUserList);
    localStorage.setItem('userList', JSON.stringify(updatedUserList));
  };
 
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick= {handleProducts} variant="h6" sx={{ flexGrow: 1 }}>
            Products
          </Button>
          <Button  color="inherit" onClick={handleLogin}>
            Login
          </Button>
          <Button color="inherit" onClick={handleRegister}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/login" element={<Login userList={userList}  />} />
        <Route path="/register" element={<Register userList={userList} addUser={addUser}   />} />
        <Route path="*" element={<NotFoundPage />}></Route>

    
      </Routes>
    </div>
  );
}

export default App;
