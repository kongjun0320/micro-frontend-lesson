const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "aic",
    projectName: "child-react",
    webpackConfigEnv,
    argv,
  });

delete defaultConfig.externals

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 3000,
    },
  });
};
