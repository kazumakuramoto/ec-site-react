import React, { useState, useEffect } from 'react';
import './MaruiDemo.css';

const MaruiDemo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="marui-demo-container">
      <img 
        src={isMobile ? '/marui-product-mobile.png' : '/marui-product-desktop.png'}
        alt="マルイ商品詳細ページ"
        className="marui-screenshot"
      />
    </div>
  );
};

export default MaruiDemo;