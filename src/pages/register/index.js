import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { CreateNewUser } from "./hooks/createNewUser";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const createNewUser = () =>
    CreateNewUser(name, username, password, email, age);

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
              onChange={(text) => setName(text.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control register-input"
              placeholder="Usuario"
              required
              onChange={(text) => setUsername(text.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control register-input"
              placeholder="Senha"
              required
              onChange={(text) => setPassword(text.target.value)}
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
              onChange={(text) => setEmail(text.target.value)}
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
              onChange={(text) => setAge(text.target.value)}
            ></input>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block register-button"
            onClick={createNewUser}
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
