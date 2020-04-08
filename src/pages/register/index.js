import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  return (
    <div id="register-content">
      <div id="register-header">
        <p id="register-title">Cadastro</p>
        <FontAwesomeIcon id="register-icon" icon={faBookOpen}></FontAwesomeIcon>
      </div>
      <div id="register-sign-in-form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control register-input"
              placeholder="Nome"
              required
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control register-input"
              placeholder="Usuario"
              required
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control register-input"
              placeholder="Senha"
              required
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control register-input"
              placeholder="Confirme sua senha"
              required
            ></input>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control register-input"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="form-group">
            <input
              type="number"
              min="13"
              max="130"
              className="form-control register-input"
              placeholder="Sua idade"
              required
            ></input>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block register-button"
          >
            Cadastrar
          </button>
        </form>
      </div>
      <div id="register-links-container">
        <a className="register-link" href="/">
          Entrou aqui por engano? Volte para o login
        </a>
      </div>
    </div>
  );
};
