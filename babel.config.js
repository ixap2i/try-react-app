module.exports = function (api) {

  api.cache(false);
  const presets = [
    './node_modules/@babel/preset-env',
    './node_modules/@babel/preset-react',
    './node_modules/@babel/preset-flow'
  ];
  const plugins = [
    './node_modules/@babel/plugin-transform-runtime',
  ];
  return {
    presets,
    plugins
  };
}