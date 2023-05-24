import React, { createContext, useState, useContext } from 'react';

// Context oluşturma
const OrderContext = createContext();

const Basket = () => {
  const [inputValue, setInputValue] = useState('');
  const { addToOrder } = useContext(OrderContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOrder = () => {
    addToOrder(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleOrder}>Order</button>
    </div>
  );
};

const Order = () => {
  const { orderItems } = useContext(OrderContext);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder }}>
      <div>
        <Basket />
        <Order />
      </div>
    </OrderContext.Provider>
  );
};

export default App;







