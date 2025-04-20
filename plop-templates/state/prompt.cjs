const toLowerCase = str => str.charAt(0).toLowerCase() + str.slice(1);

module.exports = {
  description: "Create a new state!",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Please enter the state name (ends with Atom)",
    },
    {
      type: "input",
      name: "defaultValue",
      message: "Please enter the default value of state (press enter for undefined)",
    },
    {
      type: "input",
      name: "type",
      message: "Please enter type of the state (typescript primitive or any)",
    },
  ],
  actions: data => {
    const { name, defaultValue, type } = data;

    const actions = [];
    if (name) {
      actions.push({
        type: "add",
        path: `./src/shared/states/${toLowerCase(name)}.ts`,
        templateFile: "./plop-templates/state/index.hbs",
        data: {
          name,
          defaultValue,
          type,
        },
      });
    }

    return actions;
  },
};
