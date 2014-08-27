exports = module.exports = function(Comment, helpers) {
    return {
        get: require('./get')(Comment, helpers),
        create: require('./create')(Comment, helpers)
    };
};
