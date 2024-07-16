import React from 'react'
import { Cover } from './Cover';
import { TopBar } from './TopBar';
import { Sobre } from './Sobre';
import { TimeSection } from './Time';
import { Footer } from './Footer';
import  Noticias from './Noticias';

export const Homepage = () => {
  return (
    <div className="App bg-black h-screen pt-10 text-white flex flex-col ">
      <TopBar/>
      <Cover/>
      <Sobre/> 
      <TimeSection/> 
      <Noticias/>
      <Footer/>
    </div>
  )
}
