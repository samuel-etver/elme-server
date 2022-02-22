const RequestChecker = require('./RequestChecker');

let checkRequest = RequestChecker.check;


function onGetMeasures (req, reply) {
    reply.send('measures');
}


async function onPutPing (req, reply) {
    return async () => reply.code(200);
}


module.exports = function (server, opts, done) {
    server.get('/measures', onGetMeasures);
    server.put('/measures', onPutMeasures);
    done();
};
