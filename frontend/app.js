const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const Routes = require('./routes');

(async () => {
  const server = await new Hapi.Server({
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  await server.register([
    Inert
  ]);

  try {
    server.route(Routes);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(err);
  }
})();

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});