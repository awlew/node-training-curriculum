import _ from 'lodash';
import path from 'path';
import Hapi from 'hapi';
import glob from 'glob';

function startServer() {
  let server = new Hapi.Server();

  server.connection({
    host : process.env.HOST || '0.0.0.0',
    port : process.env.PORT,
    routes : {
      cors : {
        origin : [ '*' ],
      },
    },
  });

  server.register([
    require('inert'),
  ], function(err) {
    if (err) {
      throw err;
    }
  });

  // Load all js route files in /api
  let files = glob.sync(path.join(__dirname, '..', '/server/routes', '*.js'));
  files.forEach((file) => {
    console.log(`Loading routes from ${path.basename(file)}`);
    let routes = require(file);
    if (_.isFunction(routes)) {
      routes(server);
    } else {
      server.route(routes);
    }
  });

  server.start(function() {
    console.log(server.info);
  });

  return server;
}

export default function(program) {
  return program
    .command('web')
    .description('start a web server')
    .action(startServer);
};
