import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

/**
 * 首页组件
 * 网站的入口页面，展示主要功能和快捷入口
 */
const Home: React.FC = () => {
  const { t } = useTranslation();

  // 使用 useEffect 在组件挂载时记录日志
  useEffect(() => {
    console.log('Home 页面已挂载');
    return () => {
      console.log('Home 页面已卸载');
    };
  }, []);

  return (
    <div className="home-container">
      <header className="hero">
        <h1>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
        <div className="cta-buttons">
          <Link to="/guide" className="btn btn-primary">{t('home.getStarted')}</Link>
          <a href="#" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); alert(t('home.downloadAlert')); }}>{t('home.download')}</a>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>{t('home.features.speed.title')}</h2>
          <p>{t('home.features.speed.desc')}</p>
        </div>
        <div className="feature-card">
          <h2>{t('home.features.security.title')}</h2>
          <p>{t('home.features.security.desc')}</p>
        </div>
        <div className="feature-card">
          <h2>{t('home.features.platform.title')}</h2>
          <p>{t('home.features.platform.desc')}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
