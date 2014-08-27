var async = require('async');
var nodejsx = require('node-jsx').install();
var Message = require('../../../client/javascript/message');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'Your volatile message',
            description: 'share secret messages',
        };

        async.waterfall([
            function(callback) {
                services.message.get(req.params.hash, function (err, message) {
                    callback(err, message);
                });
            },
            function(message, callback) {
                context.message = message;
                callback();
            }
        ], function(err, result) {
            if (err) return next(err);

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
        });
    };
};
