var crypto = require('crypto');

exports = module.exports = function(collection, mongoose) {
    var schema = mongoose.Schema({
        hash: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        text: {
            type: String,
            default: ''
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 86400,
            required: true
        }
    });

    schema.methods.generateHash = function() {
        var seed = crypto.randomBytes(20);
        var currentDate = (new Date()).valueOf().toString();
        return crypto.createHash('sha1').update(seed + currentDate).digest('hex');
    };

    return mongoose.model(collection, schema);
};
