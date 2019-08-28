const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        atoms: path.resolve(__dirname, 'src/components/atoms'),
        molecules: path.resolve(__dirname, 'src/components/molecules'),
        organisms: path.resolve(__dirname, 'src/components/organisms'),
        pages: path.resolve(__dirname, 'src/components/pages'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
  },
};
