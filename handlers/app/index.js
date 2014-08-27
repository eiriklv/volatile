exports = module.exports = function(services, helpers) {
    return {
        home: require('./home')(services, helpers),
        message: require('./message')(services, helpers),
        share: require('./share')(services, helpers)
    };
};
