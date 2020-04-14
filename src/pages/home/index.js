import React, { Component } from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faJedi, faPlus } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../services/api";
import { RenderRules } from "./functions/renderRule";
import { RenderRuleGroup, RenderRuleOption } from "./functions/renderRuleGroup";
import {
  OpenPublicationModal,
  OpenRuleModal,
} from "./functions/modalFunctions";

import { CreatePublication } from "./functions/createPublication";

export class Home extends Component {
  state = {
    loading: true,
    rules: [],
    rulesGroup: [],
    rulesOptions: [],
    newPublication: {
      fk_rule_group: "",
      is_public: false,
      title: "",
      description: "",
    },
    rules_route: "/rules/get_all",
  };
  async componentDidMount() {
    const [resultRuleGroup, resultRules] = await Promise.all([
      api.get("/rules_group/get_all"),
      api.get(this.state.rules_route),
    ]);
    const changeRuleRoute = async (newRoute) => {
      const [resultRules] = await Promise.all([api.get(newRoute)]);
      this.setState({
        rules_route: newRoute,
        rules: RenderRules(resultRules.data, OpenRuleModal),
      });
    };
    this.setState({
      rules: RenderRules(resultRules.data, OpenRuleModal),
      rulesGroup: RenderRuleGroup(resultRuleGroup.data, changeRuleRoute),
      rulesOptions: RenderRuleOption(resultRuleGroup.data),
      loading: false,
    });

    OpenPublicationModal();
  }

  render() {
    const createPublication = () =>
      CreatePublication(this.state.newPublication);
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
              <div id="home-indice-title-left">
                <FontAwesomeIcon
                  id="home-indice-icon"
                  icon={faJedi}
                ></FontAwesomeIcon>
                <p id="home-indice-text">Indice</p>
              </div>
              <div id="home-indice-title-right">
                <FontAwesomeIcon
                  id="home-indice-title-right-icon"
                  icon={faPlus}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div id="home-rule-group">{this.state.rulesGroup}</div>
          </div>
          <div id="home-center-content">
            <div id="home-publication-area">
              <textarea
                placeholder="Escreva uma regra"
                required
                onChange={(e) =>
                  this.setState({
                    newPublication: {
                      fk_rule_group: this.state.newPublication.fk_rule_group,
                      title: this.state.newPublication.title,
                      description: e.target.value,
                      is_public: this.state.newPublication.is_public,
                    },
                  })
                }
              ></textarea>
              <button id="open-publication-modal">Publicar</button>
            </div>
            <div id="home-publications">{this.state.rules}</div>
          </div>
          <div id="home-right-content"></div>
        </div>
        {/* MODAL REGRA */}
        <div id="rule-modal" className="modal">
          <div className="rule-modal-content">
            <div id="rule-modal-title">
              <p id="rule-modal-title-text"></p>
              <span className="close" id="rule-modal-close-button">
                &times;
              </span>
            </div>
            <div id="rule-modal-body">
              <p id="rule-modal-body-content"></p>
            </div>
            <div id="rule-modal-action-area">
              <button id="rule-modal-action-area-button-delete">Apagar</button>
              <button id="rule-modal-action-area-button-edit">Editar</button>
            </div>
          </div>
        </div>
        {/* MODAL REGRA */}

        {/* MODAL PUBLICAÇÃO */}
        <div id="publication-modal" className="modal">
          <div className="publication-modal-content">
            <div id="publication-modal-title">
              <p>Finalizando Publicação</p>
              <span className="close" id="publication-modal-close-button">
                &times;
              </span>
            </div>
            <form>
              <div id="publication-modal-body">
                <input
                  placeholder="Escolha um titulo"
                  required
                  onChange={(e) =>
                    this.setState({
                      newPublication: {
                        fk_rule_group: this.state.newPublication.fk_rule_group,
                        title: e.target.value,
                        description: this.state.newPublication.description,
                        is_public: this.state.newPublication.is_public,
                      },
                    })
                  }
                ></input>
                <div id="publication-modal-body-select-group">
                  <select
                    id="publication-modal-body-select-group-privacite"
                    required
                    onChange={(e) =>
                      this.setState({
                        newPublication: {
                          fk_rule_group: this.state.newPublication
                            .fk_rule_group,
                          title: this.state.newPublication.title,
                          description: this.state.newPublication.description,
                          is_public: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="" disabled selected hidden>
                      Privacidade
                    </option>
                    <option value={true}>Publica</option>
                    <option value={false}>Privada</option>
                  </select>
                  <select
                    id="publication-modal-body-select-group-rules-group"
                    required
                    onChange={(e) =>
                      this.setState({
                        newPublication: {
                          fk_rule_group: e.target.value,
                          title: this.state.newPublication.title,
                          description: this.state.newPublication.description,
                          is_public: this.state.newPublication.is_public,
                        },
                      })
                    }
                  >
                    <option value="" disabled selected hidden>
                      Escolha um Grupo
                    </option>
                    {this.state.rulesOptions}
                  </select>
                </div>
              </div>
              <div id="publication-modal-actions">
                <button id="publication-modal-action-cancel">Cancelar</button>
                <button
                  id="publication-modal-action-publish"
                  onClick={createPublication}
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* PUBLICAÇÃO MODAL */}
      </div>
    );
  }
}
