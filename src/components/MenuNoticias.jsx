import React, { useEffect, useState } from 'react';
import Noticia from './Noticia';
import './noticias.css';
import { Link } from 'react-router-dom';
import './MenuNoticias.css';
import { TopBar } from './TopBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

export const MenuNoticias = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/codes.github.io/newsData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNews(data))
      .catch(error => {
        console.error('Error fetching news data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="all-noticias-container">
       <Link to="/codes.github.io" className="back-arrow1">
        
        </Link>
      <TopBar />
      <FontAwesomeIcon icon={faArrowLeft} size="2x" />
     
      {error ? (
        <div>Error fetching news data: {error}</div>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <Link 
              to={`/news/${item.id}`}
              key={item.id}
              className="news-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Noticia 
                title={item.title}
                text={item.content}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
