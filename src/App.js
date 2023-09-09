import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/products/Product';
import Men from './components/Men';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Product />} />
        <Route path='/men' element={<Men />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
