module.exports = async (router) => {

    router.get('/api/users', (ctx, next) => {
        ctx.body = 'user name is test';
    });
    
    router.get('/api/infor', require('./api/infor'));
    router.get('/api/data', require('./api/database'));
};