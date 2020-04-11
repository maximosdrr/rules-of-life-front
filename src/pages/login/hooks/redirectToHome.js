export const redirectToHome = (result, history) => {
  if (result.data.token != null && result.data.token !== undefined) {
    history.push("/home");
  }
};
