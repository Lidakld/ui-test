module.exports = async (ctx) => {
    try {
      ctx.status = 200;
      ctx.body = 'return data';
    } catch (error) {
      ctx.status = 500;
      ctx.body = `Failed to get data`;
    }
};