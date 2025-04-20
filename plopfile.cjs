const featureGenerator = require("./plop-templates/feature/prompt.cjs");
const hookGenerator = require("./plop-templates/hook/prompt.cjs");
const stateGenerator = require("./plop-templates/state/prompt.cjs");

module.exports = function (plop) {
  plop.setGenerator("feature", featureGenerator);
  plop.setGenerator("hook", hookGenerator);
  plop.setGenerator("state", stateGenerator);
};
