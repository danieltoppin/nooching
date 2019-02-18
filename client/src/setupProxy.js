const proxy = require("http-proxy-middleware");
//Forwards request to express server
module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
};
