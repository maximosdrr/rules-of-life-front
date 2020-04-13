import { api } from "../../../services/api";

export const OpenPublicationModal = () => {
  var modal = document.getElementById("publication-modal");
  var btn = document.getElementById("open-publication-modal");
  var cancel = document.getElementById("publication-modal-action-cancel");
  var closeButton = document.getElementById("publication-modal-close-button");
  btn.onclick = function () {
    modal.style.display = "block";
  };
  cancel.onclick = function () {
    modal.style.display = "none";
  };

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

export const OpenRuleModal = (props) => {
  const modal = document.getElementById("rule-modal");
  const cancel = document.getElementById("rule-modal-close-button");
  const deleteButton = document.getElementById(
    "rule-modal-action-area-button-delete"
  );
  const editButton = document.getElementById(
    "rule-modal-action-area-button-edit"
  );
  modal.style.display = "block";
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      "x-access-token": token,
    },
  };
  //MANIPULAÇÃO DO CONTEUDO
  const ruleTitle = document.getElementById("rule-modal-title-text");
  const ruleContent = document.getElementById("rule-modal-body-content");
  const modalTitle = document.getElementById("rule-modal-title");
  const modalBody = document.getElementById("rule-modal-body");
  ruleTitle.innerHTML = props.title;
  ruleContent.innerHTML = props.description;

  const closeEditing = () => {
    modal.style.display = "none";
    modalTitle.innerHTML = `<p id="rule-modal-title-text"></p>
        <span className="close" id="rule-modal-close-button">
          &times;
        </span>`;
    modalBody.innerHTML = `<p id="rule-modal-body-content"></p>`;
    editButton.style = `background-color: #2a83ed;`;
    editButton.innerHTML = "Editar";
  };

  const openEditing = () => {
    modalTitle.innerHTML = `<input id="rule-modal-edit-title" 
      value='${props.title}'></input>
      <span className="close" id="rule-modal-close-button">
          &times;
        </span>
      `;
    document.getElementById("rule-modal-close-button").onclick = () =>
      closeEditing();

    modalBody.innerHTML = `<textarea id="rule-modal-edit-description" 
      value='${props.description}'>${props.description}</textarea>
      `;
    editButton.innerHTML = "Confirmar";
    editButton.style = `background-color: rgb(16, 95, 16);`;
  };

  //MANIPULAÇÃO DO CONTEUDO

  editButton.onclick = () => {
    openEditing();
    editButton.onclick = async () => {
      const title = document.getElementById("rule-modal-edit-title");
      const description = document.getElementById(
        "rule-modal-edit-description"
      );
      await api
        .put(
          "/rules/update",
          {
            id: props.id,
            title: title.value,
            description: description.value,
            is_public: props.is_public,
          },
          header
        )
        .then((result) => {
          modal.style.display = "none";
          modalTitle.innerHTML = `<p id="rule-modal-title-text"></p>
        <span className="close" id="rule-modal-close-button">
          &times;
        </span>`;
          modalBody.innerHTML = `<p id="rule-modal-body-content"></p>`;
          alert("Regra editada");
        })
        .catch((erro) => alert(erro));
    };
  };

  deleteButton.onclick = async () => {
    await api
      .delete(`/rules/delete/${props.id}`, header)
      .then((result) => {
        modal.style.display = "none";
        alert("Regra apagada");
      })
      .catch((erro) => alert(erro));
  };

  cancel.onclick = () => closeEditing();

  window.onclick = function (event) {
    if (event.target === modal) {
      closeEditing();
    }
  };
};
