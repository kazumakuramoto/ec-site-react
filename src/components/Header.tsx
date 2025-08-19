import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <p>🎉 期間限定セール開催中！全品送料無料 🎉</p>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              ModernStore
            </Link>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>商品一覧</Link>
              <Link to="/categories" onClick={() => setIsMenuOpen(false)}>カテゴリー</Link>
              <Link to="/deals" onClick={() => setIsMenuOpen(false)}>セール</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>

            <div className="nav-actions">
              <button className="icon-button">
                <Search size={20} />
              </button>
              
              <button className="icon-button">
                <Heart size={20} />
              </button>
              
              <button className="icon-button">
                <User size={20} />
              </button>
              
              <Link to="/cart" className="icon-button cart-button">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;