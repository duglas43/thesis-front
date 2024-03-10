const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@app": path.resolve(__dirname, "src/app/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@widgets": path.resolve(__dirname, "src/widgets/"),
      "@entities": path.resolve(__dirname, "src/entities/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
    },
  },
};
