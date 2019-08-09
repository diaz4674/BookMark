function getTokenId() {
  const token = localStorage.getItem("token");
  const deconstructedToken = token.split(".")[1];
  const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
  let id = deconstructedUserID.id;

  return id;
}

export { getTokenId };
