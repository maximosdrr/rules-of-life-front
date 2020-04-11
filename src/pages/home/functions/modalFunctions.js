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
