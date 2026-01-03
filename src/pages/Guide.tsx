import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Guide.css';

/**
 * 使用指南页面组件
 * 包含软件的安装、配置和基本使用说明
 */
const Guide: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Guide 页面已挂载');
  }, []);

  return (
    <div className="guide-container">
      <h1>{t('guide.title')}</h1>
      <div className="guide-content">
        <section>
          <h2>{t('guide.steps.install.title')}</h2>
          <p>{t('guide.steps.install.desc')}</p>
        </section>

        <section>
          <h2>{t('guide.steps.launch.title')}</h2>
          <p>{t('guide.steps.launch.desc')}</p>
        </section>

        <section>
          <h2>{t('guide.steps.send.title')}</h2>
          <p>{t('guide.steps.send.desc')}</p>
        </section>

        <section>
          <h2>{t('guide.steps.receive.title')}</h2>
          <p>{t('guide.steps.receive.desc')}</p>
        </section>
      </div>
    </div>
  );
};

export default Guide;
