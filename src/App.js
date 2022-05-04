
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Home/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Home/Blogs/Blogs';
import Login from './pages/Home/Login/Login';
import Footer from './pages/shared/Footer/Footer'
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div >
  );
}

export default App;
