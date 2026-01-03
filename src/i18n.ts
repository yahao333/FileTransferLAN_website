import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zh from './locales/zh.json';

i18n
  // 检测用户语言
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 将 i18n 实例传递给 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en', // 默认语言设置为英文
    
    // 配置语言检测选项
    detection: {
      // 检测顺序：仅检查本地存储、会话存储和 Cookie
      // 移除了 'navigator'，这样就不会自动使用浏览器的语言设置
      order: ['localStorage', 'sessionStorage', 'cookie'],
      
      // 缓存用户语言选择的方式
      caches: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    }
  });

export default i18n;
