// src/Routing.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuNoticias } from './components/MenuNoticias';
import NewsDetail from './components/NewsDetail'; 
import App from './App';

const Routing = () => {
  return (
    <BrowserRouter basename="/codes.github.io">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<MenuNoticias />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
