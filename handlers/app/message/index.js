var nodejsx = require('node-jsx').install();
var Message = require('../../../client/javascript/message');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'Volatile',
            description: 'share secret messages',
            message: 'This is a secret message'
        };

        helpers.react.renderMarkupToString({
            component: Message,
            clientScripts: ['/javascript/message.js'],
            context: context,
            staticPage: false,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};
