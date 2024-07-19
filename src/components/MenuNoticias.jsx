// src/components/MenuNoticias.js
import React from 'react';
import Noticia from './Noticia';
import './noticias.css';
import { Link } from 'react-router-dom';
import './MenuNoticias.css'

  export const MenuNoticias = () => {
    return (
      <div className="all-noticias-container">
        <div className="news-grid">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <Link to={`/news/${index + 1}`}
                  key={index}
                  className="news-item"
                  style={{ textDecoration: 'none', color: 'inherit' }}>
              <Noticia 
                title={`Título da notícia ${index + 1}`} 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
              />
            </Link>
          ))}
        </div>
      </div>
    );
  };
