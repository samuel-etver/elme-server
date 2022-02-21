const GlobalStorage = require('./../../GlobalStorage');


let globalStorage = GlobalStorage.getInstance();


function onGetPing (req, reply) {
    reply.send('ping');
};


function onPutPing (req, reply) {
    let db = globalStorage.rtDb;
}


module.exports = function (server, opts, done) {
    server.get('/ping', onGetPing);
    server.put('/ping', onPutPing);
    done();
};
