exports = module.exports = function(Message, helpers, config) {
    return function(messageText, callback) {
        var message = new Message({
            text: messageText
        });

        message.hash = message.generateHash();

        message.save(function(err, product) {
            if (err || !product.hash) return callback(err ? err : 'no hash returned');

            var returnUrl = 'http://' + config.get('server.domain') + '/' + product.hash;
            callback(null, returnUrl);
        });
    };
};
