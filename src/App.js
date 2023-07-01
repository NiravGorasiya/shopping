import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import Men from './components/Men';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Product />} />
        <Route path='/men' element={<Men />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
