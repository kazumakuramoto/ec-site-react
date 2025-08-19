import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import './Cart.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'ワイヤレスヘッドホン Pro', price: 24999, quantity: 1, image: 'https://picsum.photos/200/200?random=40' },
    { id: 2, name: 'スマートウォッチ Ultra', price: 45999, quantity: 2, image: 'https://picsum.photos/200/200?random=41' },
    { id: 3, name: 'プレミアムバックパック', price: 12999, quantity: 1, image: 'https://picsum.photos/200/200?random=42' },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 10000 ? 0 : 1000;
  const tax = (subtotal) * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty fade-in">
        <div className="empty-cart">
          <ShoppingBag size={80} />
          <h2>カートは空です</h2>
          <p>お気に入りの商品を追加してください</p>
          <Link to="/products" className="btn-continue">
            <ArrowLeft size={20} />
            ショッピングを続ける
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page fade-in">
      <div className="container">
        <h1>ショッピングカート</h1>

        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-header">
              <h2>カート内の商品 ({cartItems.length})</h2>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">¥{item.price.toLocaleString()}</p>
                </div>
                
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="item-total">
                  ¥{(item.price * item.quantity).toLocaleString()}
                </div>
                
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <X size={20} />
                </button>
              </div>
            ))}

            <Link to="/products" className="continue-shopping">
              <ArrowLeft size={20} />
              ショッピングを続ける
            </Link>
          </div>

          <div className="cart-summary">
            <h2>注文内容</h2>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>小計</span>
                <span>¥{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="summary-row">
                <span>配送料</span>
                <span>{shipping === 0 ? '無料' : `¥${shipping.toLocaleString()}`}</span>
              </div>
              
              <div className="summary-row">
                <span>消費税</span>
                <span>¥{Math.round(tax).toLocaleString()}</span>
              </div>
              
              <div className="summary-total">
                <span>合計</span>
                <span>¥{Math.round(total).toLocaleString()}</span>
              </div>
            </div>

            <button className="checkout-btn">レジに進む</button>
            
            {shipping > 0 && (
              <div className="free-shipping-info">
                送料無料まであと¥{(10000 - subtotal).toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;