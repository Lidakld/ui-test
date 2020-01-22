const Koa = require('koa')
const Router = require('koa-router');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
var bodyParser = require('koa-bodyparser');
const allRoutes = require('./../routes/index');

const app = new Koa()
const router = new Router();

// add koa body parser
app.use(bodyParser());

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app
  .use(router.routes())
  .use(router.allowedMethods());

  // pass all api routes to here (backend)
  allRoutes(router);

  // show all client side (frontend)
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  // app.listen(port, host) // remove host because it can't run on heroku
  app.listen(port)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
