exports = module.exports = function(models, helpers) {
    return {
        message: require('./message')(models.Message, helpers)
    };
};
