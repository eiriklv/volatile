exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedIn)
        .post(handlers.share);

    return router;
};
