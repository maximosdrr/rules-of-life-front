import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
  return (
    <div id="login-content">
      <div id="login-header">
        <p id="login-title">Rules of Life</p>
        <FontAwesomeIcon id="login-icon" icon={faBookOpen}></FontAwesomeIcon>
      </div>

      <div id="login-sign-in-form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control login-input"
              placeholder="Enter username"
              required
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control login-input"
              placeholder="Password"
              required
            ></input>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block login-button"
          >
            Login
          </button>
        </form>
      </div>
      <div id="login-links-container">
        <a href="/" className="login-link">
          Esqueceu a senha?
        </a>
        <a href="/register" className="login-link">
          Ainda não possui conta? Crie agora
        </a>
      </div>
    </div>
  );
};
