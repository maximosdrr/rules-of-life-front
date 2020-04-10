export const redirectToHome = (result, history) => {
  console.log();
  if (result.data.token != null && result.data.token !== undefined) {
    history.push("/home");
  } else {
    alert(result.data.message);
  }
};
