import fs from 'fs';

export default function(server) {

  let index = '';
  try {
    index = fs.readFileSync('dist/index.html').toString('utf8');
  } catch (e) {
    server.log(['warn'], 'dist/index.html not found');
    // ignore (this file will likely not exist in the dev environment)
  }

  server.route({
    method : 'GET',
    path : '/',
    handler : function(request, reply) {
      return reply(index);
    },
    config : {
      id : 'static.index',
      auth : false,
      description : 'Serve index',
      notes : 'Serves index.html',
      tags : [ 'static', 'public' ],
    },
  });

  server.route({
    method : 'GET',
    path : '/assets/{path*}',
    handler : {
      directory : {
        path : 'dist/assets',
      },
    },
    config : {
      id : 'static.assets',
      auth : false,
      description : 'Serve static assets',
      tags : [ 'static', 'public' ],
    },
  });

  server.route({
    method : 'GET',
    path : '/images/{path*}',
    handler : {
      directory : {
        path : 'dist/images',
      },
    },
    config : {
      id : 'static.images',
      auth : false,
      description : 'Serve images',
      tags : [ 'static', 'public' ],
    },
  });

  server.route({
    method : 'GET',
    path : '/js/{path*}',
    handler : {
      directory : {
        path : 'dist/js/',
      },
    },
    config : {
      id : 'static.js',
      auth : false,
      description : 'Serve javascript',
      tags : [ 'static', 'public' ],
    },
  });
}
