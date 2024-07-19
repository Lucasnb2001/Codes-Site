// src/Noticias.js
import React, { useRef } from 'react';
import Noticia from './Noticia';
import './noticias.css';
import { Link } from 'react-router-dom';

const Noticias = () => {
  const containerRef = useRef(null);

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
        <div className="inline-block">
          <Noticia 
            title="Notícia 1" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
        <div className="inline-block">
          <Noticia 
            title="Notícia 2" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
        <div className="inline-block">
          <Noticia 
            title="Notícia 3" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
        <div className="inline-block">
          <Noticia 
            title="Notícia 4" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
        <div className="inline-block">
          <Noticia 
            title="Notícia 5" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
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
