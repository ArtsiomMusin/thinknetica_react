const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3001;

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: { color: true }
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening ${host} on ${port}`);
});