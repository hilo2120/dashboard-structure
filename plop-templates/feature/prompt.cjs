const toUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1);
const toLowerCase = str => str.charAt(0).toLowerCase() + str.slice(1);

module.exports = {
  description: "Create a new feature!",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Please enter the feature name",
    },
  ],
  actions: data => {
    const { name } = data;
    const upperFirstName = toUpperCase(name);

    const actions = [];
    if (name) {
      actions.push(
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/components/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/hooks/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/pages/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/services/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/services/hooks/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/services/middlewares/request.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/services/middlewares/response.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/services/service-calls/queries/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/services/service-calls/mutations/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/states/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/types/index.types.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/utils/consts/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${toLowerCase(name)}/utils/helper-functions/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        }
      );
    }

    return actions;
  },
};
