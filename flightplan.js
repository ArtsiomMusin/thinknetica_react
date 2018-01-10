var plan = require('flightplan');

var tmpDir = 'blog-client-' + new Date().getTime();
var user = 'artem';

plan.target('production', {
  host: 'localhost',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to a remote host');
  var files = local.exec('git ls-files', {silent: true});
  local.transfer(files, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.exec('npm use default');
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm(' -rf /tmp/' + tmpDir);

  remote.log('Install deps');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Tests');
  remote.exec('npm --prefix ~/' + tmpDir + ' test');

  remote.log('Build');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Completed');
});
