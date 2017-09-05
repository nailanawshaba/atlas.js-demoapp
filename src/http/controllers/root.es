export default {
  get(ctx) {
    ctx.status = 200
    ctx.body = {
      env: ctx.atlas.env,
      now: new Date(),
    }
  },
}
