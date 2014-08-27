var async = require('async');
var nodejsx = require('node-jsx').install();
var Share = require('../../../client/javascript/share');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var message = req.body.message;

        var context = {
            title: 'Volatile - share',
            description: 'share secret messages',
        };

        async.waterfall([
            function(callback) {
                services.message.create(message, function(err, url) {
                    callback(err, url);
                });
            },
            function(url, callback) {
                context.url = url;
                callback();
            }
        ], function(err, result) {
            if (err) return next(err);

            helpers.react.renderMarkupToString({
                component: Share,
                clientScripts: ['/javascript/share.js'],
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
