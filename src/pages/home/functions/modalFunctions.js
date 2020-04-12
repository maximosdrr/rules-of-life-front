export const OpenRuleModal = () => {
  var modal = document.getElementById("rule-modal");
  var closeButton = document.getElementById("rule-modal-close-button");
  var content = document.getElementById("home-center-content");

  content.onclick = function () {
    window.onclick = (e) => {
      const path = e.path;
      path.map((item) => {
        if (item.id === "rule-item-text-content") {
          modal.style.display = "block";
        }
        return false;
      });
    };
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
