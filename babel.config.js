module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json", ".ttf"],
          alias: {
            '@assets/fonts': './assets/fonts/', 
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};