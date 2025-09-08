import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import About from './pages/About';
import MaruiDemo from './pages/MaruiDemo';

function AppContent() {
  const location = useLocation();
  const isMaruiDemo = location.pathname === '/marui-demo';

  return (
    <div className="App">
      {!isMaruiDemo && <Header />}
      <main style={{ minHeight: isMaruiDemo ? '100vh' : 'calc(100vh - 140px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/marui-demo" element={<MaruiDemo />} />
        </Routes>
      </main>
      {!isMaruiDemo && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;