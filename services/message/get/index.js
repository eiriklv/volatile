// this will have conditionals that checks if the message is to be deleted
exports = module.exports = function(Message, helpers) {
    return function(hash, callback) {
        Message.findOneAndRemove({ hash: hash }, function(err, message) {
            if (err || !message) return callback(err ? err : 'not found');
            callback(null, message.text);
        });
    };
};
