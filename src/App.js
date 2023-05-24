import './App.css';
import PrivatePages from './pages/PrivatePages/PrivatePage'
import PublicPages from './pages/PublicPages/PublicPage'
import { LoginContext } from './pages/PublicPages/LoginContext'
import { useContext } from 'react';


function App() {
  const { loginStatus } = useContext(LoginContext);

  return (
    <div className="App"> 
     <>
     {
        loginStatus == true ? <PrivatePages /> : <PublicPages />
     }
     </>
    </div>
  );
}

export default App;
