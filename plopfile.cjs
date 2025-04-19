const featureGenerator = require("./plop-templates/feature/prompt.cjs");

module.exports = function (plop) {
  plop.setGenerator("feature", featureGenerator);
};
