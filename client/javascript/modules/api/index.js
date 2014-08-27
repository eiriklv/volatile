var request = require('superagent');

exports = module.exports = function(config) {
    return {
        message: require('./comments')(request, config.api.url + '/message')
    };
};
