import React, { useContext } from 'react'
import { useState } from 'react'
import { LoginContext } from './LoginContext';
import { useNavigate } from 'react-router-dom';


function Login({ userList }) {
  let navigate = useNavigate()
  const { loginStatus, setloginStatus } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginCheck = (e) => {
    e.preventDefault()
    const user = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setloginStatus(true);
      localStorage.setItem('login', true);
      navigate('/')
    } else {
      alert('Invalid username or password');
    }

    setEmail('');
    setPassword('');

  }

  const toRegister = () => {
    navigate('/register')
  }

  return (<>
    <div className="login">
      <div className="form">
        <form noValidate>
          <span>Login</span>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter email"
            className="form-control inp_text"
            id="email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
          />

          <button onClick={loginCheck} type="submit">Login</button>
          <button onClick={toRegister} style={{ marginTop: '30px' }}>Sign Up</button>
        </form>
      </div>
    </div>

  </>
  )
}

export default Login

