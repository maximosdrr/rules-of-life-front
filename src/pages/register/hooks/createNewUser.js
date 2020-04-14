import { api } from "../../../services/api";

export const CreateNewUser = async (name, username, password, email, age) => {
  const data = {
    name: name,
    username: username,
    password: password,
    email: email,
    age: age,
  };

  api
    .post("/users/store", data)
    .then((result) => {
      alert("Registrado com Sucesso, Faça o login :)");
    })
    .catch((erro) => alert(erro));
};
