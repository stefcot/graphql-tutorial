const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/css/_common.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
      config.module.rule('scss').oneOf(match).use('sass-loader')
        .tap(opt => Object.assign(opt, { data: "@import '@/css/_common.scss';" }));
    });
  },
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
