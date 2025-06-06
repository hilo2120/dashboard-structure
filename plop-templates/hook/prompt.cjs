const toLowerCase = str => str.charAt(0).toLowerCase() + str.slice(1);

module.exports = {
  description: "Create a new hook!",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Please enter the hook name (start with use)",
    },
  ],
  actions: data => {
    const { name } = data;

    const actions = [];
    if (name) {
      actions.push({
        type: "add",
        path: `./src/shared/hooks/${toLowerCase(name)}.ts`,
        templateFile: "./plop-templates/hook/index.hbs",
        data: {
          name,
        },
      });
    }

    return actions;
  },
};
