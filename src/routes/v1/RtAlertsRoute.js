function onRtAlerts (req, reply) {
    reply.send('rt-alerts');
};

module.exports = function (server, opts, done) {
    server.get('/rt-alerts', onRtAlerts);
    done();
};
