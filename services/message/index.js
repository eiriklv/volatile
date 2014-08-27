exports = module.exports = function(Message, helpers, config) {
    return {
        get: require('./get')(Message, helpers, config),
        create: require('./create')(Message, helpers, config)
    };
};
