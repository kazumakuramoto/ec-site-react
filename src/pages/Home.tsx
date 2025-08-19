import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = [
    { id: 1, name: 'ワイヤレスヘッドホン Pro', price: 24999, originalPrice: 34999, rating: 4.5, image: 'https://picsum.photos/300/300?random=1', badge: 'ベストセラー' },
    { id: 2, name: 'スマートウォッチ Ultra', price: 45999, rating: 4.8, image: 'https://picsum.photos/300/300?random=2', badge: '新着' },
    { id: 3, name: 'プレミアムバックパック', price: 12999, originalPrice: 18999, rating: 4.3, image: 'https://picsum.photos/300/300?random=3' },
    { id: 4, name: 'ポータブルスピーカー', price: 8999, rating: 4.6, image: 'https://picsum.photos/300/300?random=4', badge: '限定' },
  ];

  const categories = [
    { name: 'ファッション', icon: '👔', color: 'purple' },
    { name: 'エレクトロニクス', icon: '💻', color: 'blue' },
    { name: 'ホーム', icon: '🏡', color: 'green' },
    { name: 'スポーツ', icon: '⚽', color: 'orange' },
    { name: 'ビューティー', icon: '💄', color: 'pink' },
    { name: 'おもちゃ', icon: '🎮', color: 'red' },
  ];

  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge">
                <Sparkles size={16} />
                <span>新コレクション到着</span>
              </div>
              
              <h1>
                あなたの
                <span className="gradient-text">スタイル</span>
                を見つけよう
              </h1>
              
              <p>最新トレンドから定番アイテムまで、豊富な品揃えであなたのライフスタイルを彩ります</p>
              
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  ショッピングを始める
                  <ArrowRight size={20} />
                </Link>
                <Link to="/deals" className="btn btn-secondary">
                  セール商品を見る
                </Link>
              </div>
              
              <div className="hero-stats">
                <div>
                  <div className="stat-value">10K+</div>
                  <div className="stat-label">商品数</div>
                </div>
                <div>
                  <div className="stat-value">50K+</div>
                  <div className="stat-label">満足顧客</div>
                </div>
                <div>
                  <div className="stat-value">4.9</div>
                  <div className="stat-label">平均評価</div>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img src="https://picsum.photos/600/600" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>カテゴリーから探す</h2>
            <p>お探しの商品をカテゴリーから簡単に見つけられます</p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <Link to={`/categories`} key={category.name} className="category-card">
                <div className={`category-icon ${category.color}`}>
                  {category.icon}
                </div>
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>注目の商品</h2>
            <p>厳選された人気商品をご紹介</p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="overlay-btn"><Heart size={20} /></button>
                    <Link to={`/products/${product.id}`} className="overlay-btn"><Eye size={20} /></Link>
                    <button className="overlay-btn"><ShoppingCart size={20} /></button>
                  </div>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                      />
                    ))}
                    <span>({product.rating})</span>
                  </div>

                  <div className="product-price">
                    <span className="price">¥{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="original-price">¥{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                  {product.originalPrice && (
                    <span className="discount-badge">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-outline">
              すべての商品を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;