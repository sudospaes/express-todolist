const path = require("path");

exports.statics = (app) => {
  app.use(require("express").static(path.join(__dirname, "..", "node_modules", "font-awesome")));
  app.use(require("express").static(path.join(__dirname, "..", "node_modules", "bootstrap", "dist")));
};
