// src/components/MenuNoticias.js
import React from 'react';
import Noticia from './Noticia';
import './noticias.css';

export const MenuNoticias = () => {
  return (
    <div className="menu-noticias bg-black text-white py-10">
      <div className="max-w-screen-2xl mx-auto px-10">
        <h1 className="text-3xl mb-5">All News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Noticia 
            title="Notícia 1" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
          <Noticia 
            title="Notícia 2" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
          <Noticia 
            title="Notícia 3" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
          <Noticia 
            title="Notícia 4" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
          <Noticia 
            title="Notícia 5" 
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
          />
          {/* Add more Noticia components as needed */}
        </div>
      </div>
    </div>
  );
};
