// src/Noticias.js
import React from 'react';
import Noticia from './Noticia';

const Noticias = () => {
  return (
    <div className="py-10" style={{ backgroundColor: '#DFEFA6' }}>
      <div className="max-w-screen-lg mx-auto overflow-x-auto whitespace-nowrap">
        <div className="inline-block">
          <Noticia 
            title="Título da notícia" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
        <div className="inline-block">
          <Noticia 
            title="Título da notícia" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
        <div className="inline-block">
          <Noticia 
            title="Título da notícia" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
        </div>
      </div>
    </div>
  );
};

export default Noticias;
