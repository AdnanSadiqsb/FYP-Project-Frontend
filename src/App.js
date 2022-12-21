import './App.css';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Product from './components/products/Product';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login/Login';
import Cart from './components/cart/Cart';
import ProductDetail from './components/products/ProductDetail';
import WishList from './components/whish list/WishList';
import Contact from './components/blog/Contact';
function App() {

  return (
   <>
   <Router>
    
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/productDetail' element={<ProductDetail/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/whishlist' element={<WishList/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>



      </Routes>
      <Footer></Footer>
   </Router>
   </>
  );
}

export default App;
