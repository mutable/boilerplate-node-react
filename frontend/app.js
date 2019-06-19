const tooBusy = require('toobusy-js');
const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
  port: process.env.PORT || 3000,
});


const init = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/js/{name}',
    handler: {
      directory: {
        path: 'public/js'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/health',
    handler: () => `${tooBusy.lag()}`
  });

  server.route({
    method: 'GET',
    path: '/{name*}',
    handler: (request, h) => h.file('public/index.html')
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
