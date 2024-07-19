import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importando Link para navegação
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importando o ícone de seta
import './NewsDetail.css';
import { TopBar } from './TopBar';

function NewsDetail() {
  const [newsItem, setNewsItem] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    fetch('/codes.github.io/newsData.json')
      .then(response => response.json())
      .then(data => {
        const item = data.find(news => news.id === newsId);
        setNewsItem(item);
      })
      .catch(error => console.error('Failed to load news data', error));
  }, [newsId]);

  if (!newsItem) return <div>Carregando...</div>;

  // Replace \n with <br /> for content rendering
  const formattedContent = newsItem.content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  
  return (
    <div className="news-detail-container">
      <TopBar />
      <div className="news-content">
        <Link to="/news" className="back-arrow">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
        <h1>{newsItem.title}</h1>
        <p>Por: {newsItem.author}, {newsItem.Data}</p>
        <p>{formattedContent}</p>
      </div>
    </div>
  );
}

export default NewsDetail;
