const { join } = require("path");

getRootPath = () => {
  return join(require.main.filename);
};

exports.getRootPath = getRootPath;
