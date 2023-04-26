import React from 'react';
import Linkedin from '../images/logolinkedin.png';
import Github from '../images/logogithub.png';
import Gmail from '../images/logogmail.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="w-screen flex flex-col h-32 font-belona font-bold justify-center bg-header items-center">
        <div className="divredesociais">
        <a href='https://www.linkedin.com/in/mathewsrodrigues/'>
          <img className='w-16 mt-2 hover:scale-110 p-2' src={Linkedin} alt="Logo Linkedin" />
        </a>
        <a href='https://github.com/mathews-r'>
          <img className='w-16 mt-2 hover:scale-110 p-2' src={Github} alt="Logo GitHub" />
        </a>
        <a href='mailto:mathewsrodrigues9@gmail.com?subject=Quero%20te%20contratar'>
          <img className='w-16 mt-2 hover:scale-110 p-2' src={Gmail} alt="Logo Gmail" />
        </a>
        </div>
        <p>&copy; Mathews Rodrigues</p>
      </footer>
    )
  }
}

export default Footer;