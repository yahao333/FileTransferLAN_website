import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

/**
 * 页脚组件
 * 显示版权信息和相关链接
 */
const Footer: React.FC = () => {
  const { t } = useTranslation();

  // 组件加载时的日志
  console.log('Footer 组件已加载');

  return (
    <footer className="footer">
      <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      <p>{t('footer.email')}</p>
    </footer>
  );
};

export default Footer;
