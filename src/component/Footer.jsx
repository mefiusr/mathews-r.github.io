import React from 'react';
import Linkedin from '../images/logolinkedin.png';
import Github from '../images/logogithub.png';
import Gmail from '../images/logogmail.png';
import '../styles/style.css'
import '../styles/footer.css'

class Footer extends React.Component {
  render() {
    return (
      <>
      <footer className="footer" id="footer">
        <div className="divredesociais">
        <a href='https://www.linkedin.com/in/mathewsrodrigues/'>
          <img className='logoredesocial' src={Linkedin} alt="Logo Linkedin" />
        </a>
        <a href='https://github.com/mathews-r'>
          <img className='logoredesocial' src={Github} alt="Logo GitHub" />
        </a>
        <a href='mailto:mathewsrodrigues9@gmail.com?subject=Quero%20te%20contratar'>
          <img className='logoredesocial' src={Gmail} alt="Logo Gmail" />
        </a>
        </div>
        <p>&copy; Mathews Rodrigues</p>
      </footer>
      </>
    )
  }
}

export default Footer;