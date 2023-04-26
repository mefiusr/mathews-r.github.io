import React from "react";
import { Link } from "react-scroll";

class Header extends React.Component {
  render() {
    return (
      <header className="w-screen h-50 text-5xl text-center font-source flex items-center justify-around sm:fixed bg-header text-white sm:h-32 sm:text-xl">
        <h1 className="cursor-pointer text-3xl font-bold">
          <Link to="principal">‹MR/›</Link>
        </h1>
        <div className="h-8 w-10 mb-3 sm:hidden">
          <div className="bg-white w-full m-2 h-1"></div>
          <div className="bg-white w-full m-2 h-1"></div>
          <div className="bg-white w-full m-2 h-1"></div>
        </div>
        <nav className="hidden sm:flex">
          <ul className="flex justify-between cursor-pointer gap-10">
            <Link
              to="principal"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="inline opacity-0.8 p-2 rounded-sm hover:border-b-2 hover:bg-black">
                HOME
              </li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="inline opacity-0.8 p-2 rounded-sm hover:border-b-2 hover:bg-black">
                SOBRE MIM
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="inline opacity-0.8 p-2 rounded-sm hover:border-b-2 hover:bg-black">
                PROJETOS
              </li>
            </Link>
            <Link
              to="contato"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="inline opacity-0.8 p-2 rounded-sm hover:border-b-2 hover:bg-black">
                CONTATO
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
