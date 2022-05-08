
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Home/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import Footer from './pages/shared/Footer/Footer'
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-bootstrap';
import ProductsDetail from './pages/Products/ProductsDetail';

import NotFound from './pages/NotFound/NotFound';
import RequriedAuth from './pages/Home/Login/RequiredLogin/RequriedAuth';
import AddItems from './pages/AddItems/AddItems';
import ManageItems from './pages/ManageItems/ManageItems';
import MyItems from './pages/MyItems/MyItems';
import Contact from './pages/Home/Contact/Contact';
import Blog from './pages/Home/Blog/Blog';





function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventory/:inventoryId' element={
          <RequriedAuth>
            <ProductsDetail></ProductsDetail>
          </RequriedAuth>
        }></Route>
        <Route path='/products' element={
          <RequriedAuth>
            <ProductsDetail></ProductsDetail>
          </RequriedAuth>
        }></Route>

        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/manageItems' element={

          <RequriedAuth>
            <ManageItems></ManageItems>
          </RequriedAuth>

        }></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div >

  );
}

export default App;
