exports = module.exports = function(services) {
    return {
        get: require('./get')(services.message),
        create: require('./create')(services.message)
    };
};
