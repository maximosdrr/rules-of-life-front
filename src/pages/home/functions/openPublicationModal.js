export const OpenPublicationModal = () => {
  var modal = document.getElementById("publication_modal");
  var btn = document.getElementById("open_modal");
  var cancel = document.getElementById("modal-action-cancel");
  var closeButton = document.getElementById("modal-close-button");
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
