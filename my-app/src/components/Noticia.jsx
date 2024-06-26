import React from 'react';

const Noticia = ({ title, text }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[359px] h-[359px] m-4 transform transition-transform duration-300 hover:scale-110">
      <div className="bg-gray-300 h-2/3 rounded-t-2xl"></div>
      <div className="p-4 h-1/3 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-black text-base mb-2 truncate">{title}</h2>
        <p className="text-black text-sm truncate font-normal pb-8 ">{text}</p>
      </div>
    </div>
  );
};

export default Noticia;
