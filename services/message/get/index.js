// this will have conditionals that checks if the message is to be deleted
exports = module.exports = function(Comment, helpers) {
    return function(body, callback) {
        Comment.find({}, function(err, comments) {
            comments = comments || [];
            callback(err, comments);
        })
    };
};
