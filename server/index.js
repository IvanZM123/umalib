const app = require('./src/app');
const { Nuxt, Builder } = require('nuxt');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.server.use(nuxt.render);

  // Listen the server
  app.started();
  app.connectDB();
}
start()
