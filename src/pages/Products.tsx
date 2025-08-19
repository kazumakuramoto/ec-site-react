import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown, Star, Heart, ShoppingCart } from 'lucide-react';
import './Products.css';

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    { id: 1, name: 'ワイヤレスヘッドホン Pro', price: 24999, category: 'エレクトロニクス', rating: 4.5, image: 'https://picsum.photos/300/300?random=1' },
    { id: 2, name: 'スマートウォッチ Ultra', price: 45999, category: 'エレクトロニクス', rating: 4.8, image: 'https://picsum.photos/300/300?random=2' },
    { id: 3, name: 'プレミアムバックパック', price: 12999, category: 'ファッション', rating: 4.3, image: 'https://picsum.photos/300/300?random=3' },
    { id: 4, name: 'ポータブルスピーカー', price: 8999, category: 'エレクトロニクス', rating: 4.6, image: 'https://picsum.photos/300/300?random=4' },
    { id: 5, name: 'フィットネストラッカー', price: 15999, category: 'スポーツ', rating: 4.4, image: 'https://picsum.photos/300/300?random=5' },
    { id: 6, name: 'ワイヤレスイヤホン', price: 9999, category: 'エレクトロニクス', rating: 4.7, image: 'https://picsum.photos/300/300?random=6' },
    { id: 7, name: 'デジタルカメラ', price: 89999, category: 'エレクトロニクス', rating: 4.9, image: 'https://picsum.photos/300/300?random=7' },
    { id: 8, name: 'タブレットスタンド', price: 3999, category: 'アクセサリー', rating: 4.2, image: 'https://picsum.photos/300/300?random=8' },
  ];

  return (
    <div className="products-page fade-in">
      <div className="container">
        <div className="page-header">
          <h1>すべての商品</h1>
          <p>{products.length}件の商品</p>
        </div>

        <div className="products-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-section">
              <h3>カテゴリー</h3>
              <div className="filter-options">
                <label><input type="checkbox" /> エレクトロニクス</label>
                <label><input type="checkbox" /> ファッション</label>
                <label><input type="checkbox" /> スポーツ</label>
                <label><input type="checkbox" /> ホーム</label>
                <label><input type="checkbox" /> アクセサリー</label>
              </div>
            </div>

            <div className="filter-section">
              <h3>価格帯</h3>
              <div className="filter-options">
                <label><input type="radio" name="price" /> 〜¥10,000</label>
                <label><input type="radio" name="price" /> ¥10,000〜¥50,000</label>
                <label><input type="radio" name="price" /> ¥50,000〜</label>
              </div>
            </div>

            <div className="filter-section">
              <h3>評価</h3>
              <div className="filter-options">
                <label><input type="checkbox" /> ★4以上</label>
                <label><input type="checkbox" /> ★3以上</label>
                <label><input type="checkbox" /> ★2以上</label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-content">
            <div className="products-toolbar">
              <div className="view-options">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">おすすめ順</option>
                <option value="price-low">価格が安い順</option>
                <option value="price-high">価格が高い順</option>
                <option value="rating">評価が高い順</option>
              </select>
            </div>

            <div className={`products-grid ${viewMode}`}>
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <button className="wishlist-btn"><Heart size={18} /></button>
                  </div>
                  <div className="product-details">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                        />
                      ))}
                      <span>{product.rating}</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">¥{product.price.toLocaleString()}</span>
                      <button className="add-to-cart-btn">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button className="page-btn">前へ</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">次へ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;