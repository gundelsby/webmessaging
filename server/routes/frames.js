import { DefaultPage } from '../pages/default';
import { FramesTemplate } from '../templates/funwithframes/index';
import { IFRameContent } from '../templates/funwithframes/iframecontent';
import { renderToStream } from '@popeindustries/lit-html-server';

const BASEPATH = '/frames';
const iframePath = `${BASEPATH}/iframe`;

export { registerFramesRoutes };

/**
 * Register routes for /frames
 *
 * @param {Express} app
 */
function registerFramesRoutes(app) {
  const links = [];

  app.get(BASEPATH, frameIndexHandler);
  links.push({ text: 'Frame messaging', href: BASEPATH });

  app.get(iframePath, frameFrameHandler);
  links.push({ text: 'IFrame content', href: iframePath });

  return links;
}

function frameIndexHandler(req, res) {
  const title = 'A frame within a frame';
  res.status(200);
  renderToStream(
    DefaultPage(
      { title },
      FramesTemplate({
        iframe: {
          src: iframePath
        }
      })
    )
  ).pipe(res);
}

function frameFrameHandler(req, res) {
  res.status(200);
  renderToStream(IFRameContent()).pipe(res);
}
