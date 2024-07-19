import React, { useRef, useEffect, useState } from 'react';
import Noticia from './Noticia';
import './noticias.css';
import { Link } from 'react-router-dom';

const Noticias = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Adjust the fetch path to include the base path
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

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -359, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 359, behavior: 'smooth' });
    }
  };

  return (
    <div id='noticias' className="relative py-10 min-h-[105vh] flex items-center" style={{ backgroundColor: '#DFEFA6' }}>
      <div className="max-w-screen-2xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide pl-10 pr-10" ref={containerRef}>
        {error ? (
          <div>Error fetching news data: {error}</div>
        ) : (
          news.map((item) => (
            <div key={item.id} className="inline-block">
              <Link to={`/news/${item.id}`} className="inline-block">
                <Noticia 
                  title={item.title}
                  text={item.content}
                />
              </Link>
            </div>
          ))
        )}
      </div>
      <button
        className="scroll-button scroll-button-left"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <button
        className="scroll-button scroll-button-right"
        onClick={scrollRight}
      >
        &gt;
      </button>
      <div className="absolute bottom-10 w-full text-right bg-gray-200 pr-10" style={{ backgroundColor: '#DFEFA6' }}>
        <Link to="/news" className="text-black hover:underline font-bold">
          Ver todas as notícias
        </Link>
      </div>
    </div>
  );
};

export default Noticias;
