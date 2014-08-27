exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .get(handlers.message.get)
        .post(handlers.message.create)

    return router;
};
