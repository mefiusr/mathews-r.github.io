import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cardprojects.css';

export default class CardProject extends Component {

  render() {
    const { name, image, description, url } = this.props;
    return (
      <div className="card-projects">

        <Link to={url} target="_blank" rel="noopener noreferrer">
          <img className="img-projects" src={image} alt={`Capa do Projeto ${name}`} />
          </Link>

        <h3>{name}</h3>
        <h4>
          Tecnologias utilizadas no projeto: {description}
        </h4>

        <Link to={url} target="_blank" rel="noopener noreferrer">
          <button className="button-project" type="button">Visualizar</button>
          </Link>

      </div>
    )
  }
}
