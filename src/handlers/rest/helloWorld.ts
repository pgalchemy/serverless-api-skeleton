import serverless from 'serverless-http';
import Boom from 'boom';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cacheControl from 'koa-cache-control';
import cors from '@koa/cors';
import HelloController from '../../controllers/v1/Hello';

const app = new Koa();
const router = new Router();

// Initialize middleware
app.use(bodyParser());
app.use(cors());
app.use(
  cacheControl({
    noCache: true
  })
);
app.use(logger());

router.prefix('/v1/hello');

router
  .post('/', HelloController.post)
  .get('/', HelloController.get)

app.use(router.routes());
app.use(
  router.allowedMethods({
    throw: true,
    notImplemented: () => new Boom.notImplemented(),
    methodNotAllowed: () => new Boom.methodNotAllowed()
  })
);

exports.handler = serverless(app);
