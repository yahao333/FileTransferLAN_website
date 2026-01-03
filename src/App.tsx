import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guide from './pages/Guide';
import FAQ from './pages/FAQ';
import './App.css';

/**
 * 应用主组件
 * 配置路由和全局布局
 */
const App: React.FC = () => {
  useEffect(() => {
    console.log('App 组件已加载，应用启动');
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
