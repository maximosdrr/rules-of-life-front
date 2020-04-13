import { api } from "../../../services/api";

export const CreatePublication = async (props) => {
  var modal = document.getElementById("publication-modal");
  const config = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  };
  api
    .post(
      "/rules/store",
      {
        fk_rules_group: props.fk_rule_group,
        is_public: props.is_public,
        title: props.title,
        description: props.description,
      },
      config
    )
    .then((result) => {
      modal.style.display = "none";
    })
    .catch((erro) => {
      modal.style.display = "none";
      alert(erro);
    });
};
