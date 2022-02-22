const RequestChecker = require('./RequestChecker');
const GlobalStorage = require('./../../GlobalStorage');

let checkRequest = RequestChecker.check;
let globalStorage = GlobalStorage.getInstance();


function onGetPing (req, reply) {
    reply.send('ping');
};


async function onPutPing (req, reply) {
    if (!checkRequest(req)) {
        reply.code(401);
        return;
    }

    let db = globalStorage.rtDb;

    let appId = req.body.appId;
    let equipmentId = globalStorage.industrialEquipment.getByAppId(appId).equipmentId;

    let code = 500;
    try {
        await db.writePing(equipmentId);
        code = 200;
    }
    catch (e) {
        // console.log(e);
    }
    return async () => reply.code(code);
}


module.exports = function (server, opts, done) {
    server.get('/ping', onGetPing);
    server.put('/ping', onPutPing);
    done();
};
