import React, { Component } from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faJedi } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../services/api";
import { RenderRules } from "./functions/renderRule";
import {
  RenderRuleGroup,
  RenderRuldeOption,
} from "./functions/renderRuleGroup";
import { OpenPublicationModal } from "./functions/openPublicationModal";

export class Home extends Component {
  state = {
    loading: true,
    rules_data: [],
    group_rules_data: [],
  };
  async componentDidMount() {
    const [resultRuleGroup, resultRules] = await Promise.all([
      api.get("/rules_group/get_all"),
      api.get("/rules/get_all"),
    ]);

    this.setState({
      rules_data: resultRules.data,
      group_rules_data: resultRuleGroup.data,
      loading: false,
    });

    OpenPublicationModal();
  }

  render() {
    const { rules_data, group_rules_data } = this.state;
    const rules = RenderRules(rules_data);
    const rulesGroup = RenderRuleGroup(group_rules_data);
    const rulesOptions = RenderRuldeOption(group_rules_data);
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
            <div id="home-rule-group">{rulesGroup}</div>
          </div>
          <div id="home-center-content">
            <div id="home-publication-area">
              <textarea placeholder="Escreva uma regra"></textarea>
              <button id="open_modal">Publicar</button>
            </div>
            <div id="home-publications">{rules}</div>
          </div>
          <div id="home-right-content"></div>
        </div>
        {/* MODAL */}
        <div id="publication_modal" className="modal">
          <div className="modal-content">
            <div id="modal-title">
              <p>Finalizando Publicação</p>
              <span class="close" id="modal-close-button">
                &times;
              </span>
            </div>
            <div id="modal-body">
              <input placeholder="Escolha um titulo" required></input>
              <div id="modal-body-select-group">
                <select id="modal-body-select-group-privacite" required>
                  <option value="" disabled selected hidden>
                    Privacidade
                  </option>
                  <option>Publica</option>
                  <option>Privada</option>
                </select>
                <select id="modal-body-select-group-rules-group" required>
                  <option value="" disabled selected hidden>
                    Escolha um Grupo
                  </option>
                  {rulesOptions}
                </select>
              </div>
            </div>
            <div id="modal-actions">
              <button id="modal-action-cancel">Cancelar</button>
              <button id="modal-action-publish">Publicar</button>
            </div>
          </div>
        </div>
        {/* MODAL */}
      </div>
    );
  }
}
