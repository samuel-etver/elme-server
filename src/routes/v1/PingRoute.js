function onPing (req, reply) {
    reply.send('ping');
};

module.exports = function (server, opts, done) {
    server.get('/ping', onPing);
    done();
};
