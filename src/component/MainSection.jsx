import React from "react";
import ImageProg from '../images/imgHome.png';
import Linkedin from '../images/LI-Logo.png';
import Github from '../images/GitHub_Logo.png';
import '../styles/style.css';
import '../styles/mainSection.css';

class MainSection extends React.Component {
  render() {
    return (
      <section className="principal" id="principal">

        <div className="div-text">

          <span id="title">
            <p>OLÁ, SEJA BEM VINDO(a)!</p>
            <br />
            <p>EU SOU O <strong>MATHEWS RODRIGUES.</strong></p>
            <br />
            <p>SOU DESENVOLVEDOR FULL STACK.</p>
          </span>
          <br />
          <div className="divredesociais">

        <a href='https://www.linkedin.com/in/mathewsrodrigues/' target="_blank" rel="noreferrer">
          <img className='logoLinkedinAndGit' src={Linkedin} alt="Logo Linkedin"/>
        </a>
        <a href='https://github.com/mathews-r' target="_blank" rel="noreferrer">
          <img className='logoLinkedinAndGit' src={Github} alt="Logo GitHub" />
        </a>

        </div>

        </div>

        <div className="div-image">
          <img id="photo-devices" src={ImageProg} alt="Imagem simbolizando programação em varios dispositivos" />
        </div>

      </section>
    )
  }
}

export default MainSection;