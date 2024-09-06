import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';

function Layout() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/Login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <div className='container-App'>
        {!isLoginPage && <Sidebar />}
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/Users' element={<UserList />} />
          <Route path='/User/:userId' element={<User />} />
          <Route path='/NewUser' element={<NewUser />} />
          <Route path='/Products' element={<ProductList />} />
          <Route path='/Product/:productId' element={<Product />} />
          <Route path='/NewProduct' element={<NewProduct />} />
          <Route path='*' element={<div>Pagina No Encontrada</div>} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
