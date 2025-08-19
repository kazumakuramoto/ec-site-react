import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: id,
    name: 'プレミアムワイヤレスヘッドホン',
    price: 24999,
    originalPrice: 34999,
    rating: 4.5,
    reviews: 128,
    description: '最高級のサウンド体験を提供するプレミアムワイヤレスヘッドホン。ノイズキャンセリング機能搭載で、どこでも没入感のある音楽体験を楽しめます。',
    features: [
      'アクティブノイズキャンセリング',
      '最大40時間の連続再生',
      'ハイレゾ音源対応',
      '折りたたみ可能なデザイン',
    ],
    images: [
      'https://picsum.photos/600/600?random=20',
      'https://picsum.photos/600/600?random=21',
      'https://picsum.photos/600/600?random=22',
    ],
  };

  return (
    <div className="product-detail-page fade-in">
      <div className="container">
        <div className="product-detail-grid">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1>{product.name}</h1>
            
            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span>({product.reviews} レビュー)</span>
            </div>

            <div className="price-section">
              <span className="current-price">¥{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">¥{product.originalPrice.toLocaleString()}</span>
                  <span className="discount">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="description">{product.description}</p>

            <div className="features">
              <h3>主な特徴</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="quantity-section">
              <label>数量:</label>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-add-to-cart">
                <ShoppingCart size={20} />
                カートに追加
              </button>
              <button className="btn-wishlist">
                <Heart size={20} />
              </button>
            </div>

            <div className="shipping-info">
              <div className="info-item">
                <Truck size={20} />
                <div>
                  <strong>送料無料</strong>
                  <span>5,000円以上のご購入</span>
                </div>
              </div>
              <div className="info-item">
                <Shield size={20} />
                <div>
                  <strong>1年保証</strong>
                  <span>メーカー保証付き</span>
                </div>
              </div>
              <div className="info-item">
                <RefreshCw size={20} />
                <div>
                  <strong>30日間返品可能</strong>
                  <span>返品・交換対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;