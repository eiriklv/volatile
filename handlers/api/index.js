exports = module.exports = function(services) {
    return {
        message: require('./message')(services)
    };
};
