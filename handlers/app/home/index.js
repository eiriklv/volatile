var nodejsx = require('node-jsx').install();
var Home = require('../../../client/javascript/home');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'volatile.me',
            description: 'share secret messages',
        };

        helpers.react.renderMarkupToString({
            component: Home,
            clientScripts: ['/javascript/home.js'],
            context: context,
            staticPage: false,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
