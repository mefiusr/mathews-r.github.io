import React, { Component } from 'react'
import Mathews from '../images/fotomathews.png';
import '../styles/about.css';
import '../styles/style.css';
import download from '../images/download.png';

export default class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        
      <div className="div-img-article">
        <img className="img-article" src={Mathews} alt="Foto do Mathews" />
      </div>
      <div className="about-me">
        <h1>SOBRE MIM</h1>
        <h2>Barra Mansa, Rio de Janeiro</h2>

        <p className="para">
         Oi! Sou Técnico em Automação e atualmente estou em transição de carreira. <br />Estou me dedicando nos estudos para me tornar um desenvolvedor fullstack. <br />Em fev/2022 tomei a decisão de mudar de área e buscar novos desafios.<br />
         Atualmente estou estudando Desenvolvimento Web na Trybe.
      </p>
      <div className="curriculo">
        <img src={download} alt="Download do currículo" className="logoDownload"/>
      <a href="https://github.com/mathews-r/portfolio/blob/main/src/assets/MATHEWS_RODRIGUES.pdf" download>Currículo</a>
      </div>
      </div>
  </section>

    )
  }
}
