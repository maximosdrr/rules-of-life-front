import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faJedi } from "@fortawesome/free-solid-svg-icons";
import { RuleGroup } from "./components/rule-group/index";
import { RuleItem } from "./components/rule-item/index";

export const Home = () => {
  return (
    <div id="home-main-content">
      <div id="navigation-bar">
        <FontAwesomeIcon
          icon={faBookOpen}
          id="navigation-bar-icon"
        ></FontAwesomeIcon>
        <p id="navigation-bar-title">Rules of Life</p>
      </div>
      <div id="home-body">
        <div id="home-left-content">
          <div id="home-user-area">
            <div id="home-user-image"></div>
            <div id="home-user-name">
              <p id="">Nome do usuario</p>
            </div>
          </div>
          <div id="home-indice-title">
            <FontAwesomeIcon
              id="home-indice-icon"
              icon={faJedi}
            ></FontAwesomeIcon>
            <p id="home-indice-text">Indice</p>
          </div>
          <div id="home-rule-group">
            <RuleGroup title="Grupo de regra 1"></RuleGroup>
            <RuleGroup title="Grupo de regra 2"></RuleGroup>
            <RuleGroup title="Grupo de regra 3"></RuleGroup>
            <RuleGroup title="Grupo de regra 4"></RuleGroup>
          </div>
        </div>
        <div id="home-center-content">
          <div id="home-publication-area">
            <textarea placeholder="Escreva uma regra"></textarea>
            <button>Publicar</button>
          </div>
          <div id="home-publications">
            <RuleItem
              title="Rule"
              index="1"
              description="Description"
              timesObeyed="53"
              timesDesobeyed="12"
            ></RuleItem>
            <RuleItem
              title="Rule"
              index="2"
              description="Description"
              timesObeyed="53"
              timesDesobeyed="12"
            ></RuleItem>
            <RuleItem
              title="Rule"
              index="3"
              description="Description"
              timesObeyed="53"
              timesDesobeyed="12"
            ></RuleItem>
          </div>
        </div>
        <div id="home-right-content"></div>
      </div>
    </div>
  );
};
