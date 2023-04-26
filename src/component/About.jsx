import React, { Component } from 'react'
import Mathews from '../images/fotomathews.png';
import '../styles/about.css';
import '../styles/style.css';
import download from '../images/download.png';

export default class About extends Component {
  render() {
    return (
      <section className="flex justify-center w-screen font-belona items-center bg-main gap-2">

        <div className="h-96 w-96">
          <img className="w-full h-80" src={Mathews} alt="Foto do Mathews" />
        </div>
        <div className="flex flex-col justify-around flex-wrap">
          <h1 className='font-bold ml-5'>SOBRE MIM</h1>
          <h2 className='font-bold ml-5'>Barra Mansa, Rio de Janeiro</h2>

          <p className="ml-5">
            Em transição de carreira, estou me dedicando nos estudos para me tornar um desenvolvedor fullstack. <br />Em fev/2022 tomei a decisão de mudar de área e buscar novos desafios.<br />
            Atualmente estou estudando Desenvolvimento Web na Trybe.
          </p>
          <div className="ml-5 w-auto self-center flex hover:scale-110">
            <a download="CVMATHEWS.pdf" target="_blank" href="https://github.com/mathews-r/mathews-r.github.io/blob/master/src/assets/CV_MR_FRONT_PT.pdf" rel="noreferrer" >
              <img src={download} alt="Download do currículo" className="w-10 mr-3 cursor-pointer" />
              Currículo</a>
          </div>
        </div>
      </section>

    )
  }
}
