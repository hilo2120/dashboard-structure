const toUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1);

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
          path: `./src/features/${name.toLowerCase()}/components/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/hooks/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/pages/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/services/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/services/hooks/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/services/middlewares/request.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/services/middlewares/response.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/services/service-calls/queries/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/services/service-calls/mutations/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/states/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/types/index.types.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/utils/consts/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/utils/custom-hooks/index.ts`,
          templateFile: "./plop-templates/feature/index.hbs",
          data: {
            name,
            upperFirstName,
          },
        },
        {
          type: "add",
          path: `./src/features/${name.toLowerCase()}/utils/helper-functions/index.ts`,
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
