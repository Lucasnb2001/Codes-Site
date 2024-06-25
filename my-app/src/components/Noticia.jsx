// src/Noticia.js
import React from 'react';

const Noticia = ({ title, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[359px] h-[359px] m-4">
      <div className="bg-gray-300 h-2/3"></div>
      <div className="p-4 h-1/3">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Noticia;
