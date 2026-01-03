import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

/**
 * 常见问题页面组件
 * 列出用户经常遇到的问题及解答
 */
const FAQ: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log('FAQ 页面已挂载');
  }, []);

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    }
  ];

  return (
    <div className="faq-container">
      <h1>{t('faq.title')}</h1>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>Q: {item.question}</h3>
            <p>A: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
