const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');
require('babel-core/register');
require.extensions['.css'] = () => {
  return;
};

const express = require('express');
const application = express();

const port = 3000;

application.set('views', __dirname);
application.set('view engine', 'ejs');

if (__DEVELOPMENT__) {
  const webpack = require('webpack');
  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');
  const config = require('../webpack/development.js').default;
  const compiler = webpack(config);
  application.use(
    webpackDev(
      compiler,
      {
        hot: true,
        publicPath: config.output.publicPath,
        stats: { color: true }
      }
    )
  );
  application.use(webpackHot(compiler));
}
application.use(express.static(path.join(process.cwd(), 'src', 'static')));

const morgan = require('morgan');
application.use(morgan('common'));

application.get('*', require('./render').default);

application.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
