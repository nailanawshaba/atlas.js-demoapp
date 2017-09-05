import compress from 'koa-compress'
import parser from 'koa-bodyparser'
import cors from 'kcors'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import router from './routes'
import safeguard from './safeguard'

const routes = () => router.routes()
const methods = () => router.allowedMethods()

export {
  safeguard,
  compress,
  parser,
  cors,
  conditional,
  etag,
  routes,
  methods,
}
