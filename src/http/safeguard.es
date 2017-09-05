export default function mksafeguard() {
  return async function safeguard(ctx, middleware) {
    try {
      await middleware()

      ctx.log.info({
        req: ctx.req,
        res: ctx.res,
      }, 'http:response')
    } catch (err) {
      // Too late to tell the client what went wrong...
      if (ctx.response.headerSent) {
        return void ctx.log.error({
          err, req: ctx.req,
          res: ctx.res,
        }, 'server error without response')
      }

      ctx.status = 500
      ctx.body = err
    }
  }
}
