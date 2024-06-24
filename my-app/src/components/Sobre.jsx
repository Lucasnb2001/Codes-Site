import React from 'react';
import './Sobre.css';
import { ReactComponent as GrupoPesquisaSVG } from '../assets/O GRUPO DE PESQUISA.svg';
import { ReactComponent as Lupinha } from '../assets/lupinha.svg';
import { ReactComponent as Blocudos } from '../assets/blocudos.svg';

export const Sobre = () => {
  return (
    <div id='sobre' className="Sobre text-center">
      <GrupoPesquisaSVG className="mb-4" />
      <div className="content-wrapper">
        <div className="text-content">
          <p>Fundado em 2024, o grupo de pesquisa CoDes (Combate à Desinformação e ao Discurso de Ódio) tem como objetivo estudar, projetar e desenvolver estratégias para combater desinformação, fake news e discurso de ódio. Utilizamos estratégias de Inteligência Artificial, com foco em Aprendizagem de Máquina e Processamento de Linguagem Natural.</p>
          <p>Nosso trabalho pretende envolver a avaliação de diferentes máquinas de aprendizagem e a combinação de classificadores, além da construção de bancos de dados em português e a geração de dados sintéticos. Para além disso, também propor arquiteturas para lidar com esses desafios, discutindo questões cruciais como ética, IA e desinformação.</p>
        </div>
        <Lupinha className="lupinha mb-40" />
        <Blocudos className="blocudos mt-10" />
      </div>
    </div>
  );
};
