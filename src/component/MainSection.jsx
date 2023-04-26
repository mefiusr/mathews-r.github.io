import React from "react";
import ImageProg from '../images/imgHome.png';
import Linkedin from '../images/LI-Logo.png';
import Github from '../images/GitHub_Logo.png';

class MainSection extends React.Component {
  render() {
    return (
      <section className="flex h-auto w-screen items-center justify-around font-source bg-firstSec" id="principal">

        <div className="flex items-center flex-col justify-end w-1/2">

          <span>
            <p>OLÁ, SEJA BEM VINDO(a)!</p>
            <br />
            <p>EU SOU O <strong>MATHEWS RODRIGUES.</strong></p>
            <br />
            <p>SOU DESENVOLVEDOR FULL STACK.</p>
          </span>
          <br />
          <div className="flex justify-center items-center">

        <a href='https://www.linkedin.com/in/mathewsrodrigues/' target="_blank" rel="noreferrer">
          <img className='w-20 p-1 hover:scale-110' src={Linkedin} alt="Logo Linkedin"/>
        </a>
        <a href='https://github.com/mathews-r' target="_blank" rel="noreferrer">
          <img className='w-20 p-1 hover:scale-110' src={Github} alt="Logo GitHub" />
        </a>

        </div>

        </div>

        <div className="flex justify-start w-1/2">
          <img className="hidden sm:flex sm:w-96 h-96" src={ImageProg} alt="Imagem simbolizando programação em varios dispositivos" />
        </div>

      </section>
    )
  }
}

export default MainSection;