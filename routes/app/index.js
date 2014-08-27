exports = module.exports = function(app, express, middleware, handlers, path) {
    app.use(path, require('./home')(express, middleware, handlers, '/'));
    app.use(path, require('./share')(express, middleware, handlers, '/share'));
    app.use(path, require('./message')(express, middleware, handlers, '/message'));
};
