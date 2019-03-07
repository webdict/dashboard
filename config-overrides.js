const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const addWebpackResolve = resolve => config => {
  if (!config.resolve) {
    config.resolve = {};
  }
  Object.assign(config.resolve, resolve);
  return config;
};

function readColor() {
  const fs = require('fs');
  const text = fs.readFileSync('src/conf/_vars.scss', { encoding: 'utf-8' });
  return /\$color: *([#a-z0-9]+);/i.exec(text)[1];
}
module.exports = override(
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': readColor() }
  }),
  addWebpackResolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  })
);
