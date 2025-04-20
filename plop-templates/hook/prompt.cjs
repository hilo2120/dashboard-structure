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
        path: `./src/shared/utils/custom-hooks/${name.toLowerCase()}.ts`,
        templateFile: "./plop-templates/hook/index.hbs",
        data: {
          name,
        },
      });
    }

    return actions;
  },
};
