import { DefaultPage } from './pages/default.js';
import { LinkList } from './components/lists/linklist.js';
import { logger } from './lib/logger.js';
import { renderToStream } from '@popeindustries/lit-html-server';

export { server };

/**
 * Register routes and start the server
 *
 * @param {Express} app
 * @param {number} port
 */
function server(app, port) {
  const routeLinks = registerRoutes(app);

  app.get('/', (req, res) => {
    res.status(200);
    renderToStream(DefaultPage({ title: 'Web messaging tests' }, LinkList(routeLinks))).pipe(res);
  });

  app.listen(port, () => {
    logger.info(`Server running at port ${port}`);
  });
}

function registerRoutes(app, ...routeHandlers) {
  const links = [];
  routeHandlers.forEach((routeHandler) => {
    links.push(routeHandler(app));
  });

  return links;
}
