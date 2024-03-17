export const diagnosticsOptions = {
  validate: true,
  schemas: [
    {
      uri: "http://example.com/schema.json",
      fileMatch: ["*"],
      schema: {
        type: "object",
        properties: {
          "${id}": {
            type: "string",
            description: "The unique identifier of the user",
          },
        },
      },
    },
  ],
};
