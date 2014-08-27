exports = module.exports = function(mongoose) {
    return {
        Message: require('./message')('Message', mongoose)
    };
};
