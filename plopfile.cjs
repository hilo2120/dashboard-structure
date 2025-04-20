const featureGenerator = require("./plop-templates/feature/prompt.cjs");
const hookGenerator = require("./plop-templates/hook/prompt.cjs");

module.exports = function (plop) {
  plop.setGenerator("feature", featureGenerator);
  plop.setGenerator("hook", hookGenerator);
};
