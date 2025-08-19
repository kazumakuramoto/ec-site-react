import React from 'react';
import { Clock, Zap, Percent } from 'lucide-react';
import './Deals.css';

const Deals: React.FC = () => {
  const flashDeals = [
    { id: 1, name: 'ワイヤレスイヤホン Pro', price: 5999, originalPrice: 12999, discount: 54, stock: 5, image: 'https://picsum.photos/300/300?random=60' },
    { id: 2, name: 'スマートウォッチ', price: 9999, originalPrice: 24999, discount: 60, stock: 3, image: 'https://picsum.photos/300/300?random=61' },
    { id: 3, name: '4K Webカメラ', price: 3999, originalPrice: 8999, discount: 56, stock: 12, image: 'https://picsum.photos/300/300?random=62' },
    { id: 4, name: 'ゲーミングマウス', price: 2999, originalPrice: 6999, discount: 57, stock: 8, image: 'https://picsum.photos/300/300?random=63' },
  ];

  return (
    <div className="deals-page fade-in">
      <div className="deals-hero">
        <div className="container">
          <h1>🔥 MEGA DEALS 🔥</h1>
          <p>最大70%OFF！今だけの特別価格</p>
          
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-value">23</span>
              <span className="countdown-label">時間</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">59</span>
              <span className="countdown-label">分</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">59</span>
              <span className="countdown-label">秒</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="flash-deals">
          <div className="section-header">
            <Zap size={32} />
            <h2>フラッシュセール</h2>
            <span className="badge-live">LIMITED TIME</span>
          </div>

          <div className="deals-grid">
            {flashDeals.map((deal) => (
              <div key={deal.id} className="deal-card">
                <div className="deal-badge">-{deal.discount}%</div>
                {deal.stock <= 5 && (
                  <div className="stock-badge">残り{deal.stock}個</div>
                )}
                
                <div className="deal-image">
                  <img src={deal.image} alt={deal.name} />
                </div>
                
                <div className="deal-info">
                  <h3>{deal.name}</h3>
                  
                  <div className="deal-price">
                    <span className="current">¥{deal.price.toLocaleString()}</span>
                    <span className="original">¥{deal.originalPrice.toLocaleString()}</span>
                  </div>
                  
                  <div className="stock-bar">
                    <div className="stock-fill" style={{ width: `${100 - (deal.stock * 5)}%` }}></div>
                  </div>
                  
                  <button className="deal-btn">今すぐ購入</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="coupon-section">
          <div className="section-header">
            <Percent size={32} />
            <h2>限定クーポン配布中！</h2>
          </div>
          
          <div className="coupons-grid">
            <div className="coupon-card">
              <div className="coupon-value">10% OFF</div>
              <div className="coupon-desc">初回購入限定</div>
              <div className="coupon-code">FIRST10</div>
            </div>
            
            <div className="coupon-card">
              <div className="coupon-value">¥1,000 OFF</div>
              <div className="coupon-desc">¥10,000以上購入で</div>
              <div className="coupon-code">SAVE1000</div>
            </div>
            
            <div className="coupon-card">
              <div className="coupon-value">送料無料</div>
              <div className="coupon-desc">全商品対象</div>
              <div className="coupon-code">FREESHIP</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Deals;