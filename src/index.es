import cluster from 'cluster'
import { Application } from '@atlas.js/core'

const app = Application.init({
  root: __dirname,
  // All these config options are available to be set, but we are going to use the defaults anyway
  // config: 'config',
  // hooks: 'hooks',
  // services: 'services',
  // actions: 'actions',
  // aliases: 'aliases',
})

if (require.main === module || cluster.isWorker) {
  process.once('SIGINT', exit)
  process.once('SIGTERM', exit)

  app.start()
    .catch(fatal)
}

function fatal(err) {
  console.error(err.stack)

  app.stop()
}

function exit() {
  // Prevent calling app.stop() multiple times when repeatedly pressing ctrl-c
  process.removeListener('SIGINT', exit)
  process.removeListener('SIGTERM', exit)

  app.stop()
    .catch(fatal)
}

export {
  app,
}
