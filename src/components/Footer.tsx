import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">ModernStore</h3>
            <p>最新のトレンドと高品質な商品をお届けする、あなたのためのオンラインストア</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>ショッピング</h4>
            <ul>
              <li><Link to="/products">商品一覧</Link></li>
              <li><Link to="/categories">カテゴリー</Link></li>
              <li><Link to="/deals">セール商品</Link></li>
              <li><Link to="/new">新着商品</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>サポート</h4>
            <ul>
              <li><Link to="/contact">お問い合わせ</Link></li>
              <li><Link to="/shipping">配送について</Link></li>
              <li><Link to="/returns">返品・交換</Link></li>
              <li><Link to="/faq">よくある質問</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>ニュースレター</h4>
            <p>最新情報とお得な情報をお届けします</p>
            <form className="newsletter-form">
              <input type="email" placeholder="メールアドレス" />
              <button type="submit"><Mail size={20} /></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ModernStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;