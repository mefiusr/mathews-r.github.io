import React from "react";
import "../styles/form.css";

class Form extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="contato" id="contato">
        <h3>Contato</h3>
        <div className="inputs">
          <input
            type="text"
            className="inputForm"
            placeholder="Digite seu nome"
          />

          <input
            type="email"
            className="inputForm"
            placeholder="Digite seu e-mail"
          />
        </div>

        <textarea
          name="textArea"
          className="textAreaForm"
          id="textArea"
          placeholder="Digite sua mensagem"
          cols="1"
          rows="10"
        ></textarea>

        <button
          className="buttonForm"
          type="submit"
          onClick={(event) => this.handleClick(event)}
        >
          Enviar
        </button>
      </form>
    );
  }
}

export default Form;
