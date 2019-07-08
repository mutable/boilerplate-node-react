

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/js/{name*}',
  handler: {
    directory: {
      path: 'public/js/'
    }
  }
});

routes.push({
  method: 'GET',
  path: '/{name*}',
  handler: (request, h) => h.file('public/index.html')
});
