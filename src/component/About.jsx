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
            Em transição de carreira, hoje sou Desenvolvedor Full Stack com conhecimentos em NodeJS, Express, <br /> TypeScript, MySQL, Docker, MongoDB, Mongoose, Sequelize, POO, SOLID, JWT, <br />
            Deploy, React, Redux, Metodologias Ágeis, Método SCRUM e outros.
          </p>
          <div className="curriculo">
            <a download="CVMATHEWS.pdf" target="_blank" href="https://github.com/mathews-r/mathews-r.github.io/blob/master/src/assets/CV_MR_FRONT_PT.pdf" rel="noreferrer" >
              <img src={download} alt="Download do currículo" className="logoDownload" />
              Currículo</a>
          </div>
        </div>
      </section>

    )
  }
}
