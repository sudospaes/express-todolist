const path = require("path");

exports.getRootPath = () => {
  return path.join(require.main.filename);
};
