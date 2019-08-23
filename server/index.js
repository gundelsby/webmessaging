import { DefaultPage } from './pages/default.js';
import { LinkList } from './components/lists/linklist.js';
import { logger } from './lib/logger.js';

export { server };

/**
 * Register routes and start the server
 *
 * @param {Express} app
 * @param {number} port
 */
const server = (app, port) => {
  const routeLinks = registerRoutes(app);

  app.get('/', (req, res) => {
    res.send(DefaultPage({}, LinkList(routeLinks)));
  });

  app.listen(port, () => {
    logger.info(`Server running at port ${port}`);
  });
};

function registerRoutes(app, ...routeHandlers) {
  const links = [];
  routeHandlers.forEach((routeHandler) => {
    links.push(routeHandler(app));
  });

  return links;
}
