import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

/**
 * 导航栏组件
 * 用于在页面顶部显示网站的主要导航链接
 */
const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  // 组件加载时的日志
  console.log('Navbar 组件已加载');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">{t('brand')}</Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/">{t('nav.home')}</Link>
          </li>
          <li>
            <Link to="/guide">{t('nav.guide')}</Link>
          </li>
          <li>
            <Link to="/faq">{t('nav.faq')}</Link>
          </li>
        </ul>
        <div className="language-switcher">
          <button 
            className={`lang-btn ${i18n.resolvedLanguage === 'en' ? 'active' : ''}`} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <span className="divider">|</span>
          <button 
            className={`lang-btn ${i18n.resolvedLanguage === 'zh' ? 'active' : ''}`} 
            onClick={() => changeLanguage('zh')}
          >
            中文
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
