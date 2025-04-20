const toUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1);
const toLowerCase = str => str.charAt(0).toLowerCase() + str.slice(1);

module.exports = {
  description: "Create a new component!",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Please enter the component name",
    },
  ],
  actions: data => {
    const { name } = data;

    const actions = [];
    if (name) {
      actions.push({
        type: "add",
        path: `./src/shared/components/shared/${toLowerCase(name)}/${toUpperCase(name)}.ts`,
        templateFile: "./plop-templates/component/index.hbs",
        data: {
          name,
        },
      });
    }

    return actions;
  },
};
