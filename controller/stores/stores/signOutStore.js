exports.signOutStore = (request, response) => {
  if (request.session.token) {
    request.session.destroy();
  }
  response.status(200);
};
