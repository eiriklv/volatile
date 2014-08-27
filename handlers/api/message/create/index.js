exports = module.exports = function(message) {
    return function(req, res) {
        message.create(req.body, function(err, result) {
            if (err) return res.send(400, err);
            res.send(201, result);
        });
    };
};
