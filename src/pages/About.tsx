import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page fade-in">
      <div className="container">
        <h1>About ModernStore</h1>
        <div className="about-content">
          <p>
            ModernStoreは、最新のトレンドと高品質な商品をお届けするオンラインストアです。
            お客様に最高のショッピング体験を提供することを使命としています。
          </p>
          <div className="features">
            <div className="feature">
              <h3>✨ 厳選された商品</h3>
              <p>世界中から厳選された高品質な商品のみを取り扱っています</p>
            </div>
            <div className="feature">
              <h3>🚚 迅速な配送</h3>
              <p>ご注文から24時間以内に発送、最短翌日お届け</p>
            </div>
            <div className="feature">
              <h3>💝 安心のサポート</h3>
              <p>30日間の返品保証と充実したカスタマーサポート</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;