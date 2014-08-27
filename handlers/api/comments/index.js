exports = module.exports = function(comments) {
    return {
        get: require('./get')(comments),
        create: require('./create')(comments)
    };
};
