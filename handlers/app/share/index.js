var nodejsx = require('node-jsx').install();
var Share = require('../../../client/javascript/share');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'Volatile - share',
            description: 'share secret messages',
        };

        helpers.react.renderMarkupToString({
            component: Share,
            clientScripts: ['/javascript/share.js'],
            context: context,
            staticPage: true,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
