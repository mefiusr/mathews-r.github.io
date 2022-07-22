import React from 'react';
import '../styles/header.css';
import '../styles/style.css';
import { Link } from 'react-scroll';

class Header extends React.Component {
  render() {
    return (
    <header className="header">

      <h1 className="h1-header"><Link to="principal">‹MR/›</Link></h1>
      <div className="menu-toogle">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <nav className="nav-menu">

        <ul id="ul-menu">

          <Link to="principal" spy={true} smooth={true} offset={50} duration={500}><li className="li-menu">HOME</li></Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}><li className="li-menu">SOBRE MIM</li></Link>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={500}><li className="li-menu">PROJETOS</li></Link>
          <Link to="contato" spy={true} smooth={true} offset={50} duration={500}> <li className="li-menu">CONTATO</li></Link>

        </ul>
      </nav>

    </header>

  )}
}

export default Header;