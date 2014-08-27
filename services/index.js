exports = module.exports = function(models, helpers, config) {
    return {
        message: require('./message')(models.Message, helpers, config)
    };
};
