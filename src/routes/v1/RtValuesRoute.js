const redis = require('redis');

function onGetRtValues (req, reply) {
    reply.send('get-rt-values');
};


function onPutRtValues (req, reply) {
    reply.code(200);
}


module.exports = function (server, opts, done) {
    server.get('/rt-values', onGetRtValues);
    server.put('/rt-values', onPutRtValues);
    done();
};
