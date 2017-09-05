import Router from 'koa-router'
import * as controllers from './controllers'

const router = new Router()

router.get('/', controllers.root.get)

// Default 404 handler
router.get('*', ctx => {
  ctx.status = 404
  ctx.body = {
    error: 'NotFound',
  }
})

export default router
