exports = module.exports = function(app, express, middleware, handlers, path) {
    app.use(path, require('./message')(express, middleware, handlers, '/message'));
};
