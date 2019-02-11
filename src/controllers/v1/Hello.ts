export default {
  post(ctx, next) {
    ctx.status = 201;
    ctx.body = {
      status: true,
      message: 'Hello World'
    };

    return next();
  },

  get(ctx, next) {
    ctx.status = 201;
    ctx.body = {
      status: true,
      message: 'Hello World'
    };

    return next();
  }
}

