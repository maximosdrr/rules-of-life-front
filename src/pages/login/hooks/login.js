import axios from "axios";
import { redirectToHome } from "./redirectToHome";

export const ValidateUser = async (username, password, history) => {
  await axios
    .post("http://localhost:3333/users/login", {
      username: username,
      password: password,
    })
    .then((result) => {
      const token = result.data.token;
      localStorage.setItem("token", token);
      redirectToHome(result, history);
    })
    .catch((erro) => {
      alert(erro);
    });
};
