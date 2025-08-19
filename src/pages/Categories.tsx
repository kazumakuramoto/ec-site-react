import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Categories.css';

const Categories: React.FC = () => {
  const categories = [
    {
      name: 'エレクトロニクス',
      icon: '💻',
      subcategories: ['スマートフォン', 'ノートPC', 'タブレット', 'カメラ'],
      productCount: 1234,
      image: 'https://picsum.photos/400/300?random=50',
    },
    {
      name: 'ファッション',
      icon: '👔',
      subcategories: ['メンズ', 'レディース', 'キッズ', 'シューズ'],
      productCount: 2345,
      image: 'https://picsum.photos/400/300?random=51',
    },
    {
      name: 'ホーム&ガーデン',
      icon: '🏡',
      subcategories: ['家具', 'インテリア', 'キッチン', 'ガーデニング'],
      productCount: 987,
      image: 'https://picsum.photos/400/300?random=52',
    },
    {
      name: 'スポーツ',
      icon: '⚽',
      subcategories: ['フィットネス', 'アウトドア', 'スポーツウェア'],
      productCount: 654,
      image: 'https://picsum.photos/400/300?random=53',
    },
    {
      name: 'ビューティー',
      icon: '💄',
      subcategories: ['スキンケア', 'メイクアップ', 'ヘアケア'],
      productCount: 789,
      image: 'https://picsum.photos/400/300?random=54',
    },
    {
      name: 'おもちゃ&ゲーム',
      icon: '🎮',
      subcategories: ['ビデオゲーム', 'ボードゲーム', '知育玩具'],
      productCount: 456,
      image: 'https://picsum.photos/400/300?random=55',
    },
  ];

  return (
    <div className="categories-page fade-in">
      <div className="categories-hero">
        <div className="container">
          <h1>カテゴリー</h1>
          <p>お探しの商品をカテゴリーから見つけましょう</p>
        </div>
      </div>

      <div className="container">
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products`}
              className="category-card-large"
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <span className="category-icon">{category.icon}</span>
                </div>
              </div>
              
              <div className="category-content">
                <h2>{category.name}</h2>
                <p className="product-count">{category.productCount} 商品</p>
                
                <div className="subcategories">
                  {category.subcategories.map((sub) => (
                    <span key={sub} className="subcategory-tag">{sub}</span>
                  ))}
                </div>
                
                <div className="category-link">
                  カテゴリーを見る
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;