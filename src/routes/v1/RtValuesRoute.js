const RequestChecker = require('./RequestChecker');
const RtValuesRouteEquipmentId1 = require('./RtValuesRouteEquipmentId1');
const GlobalStorage = require('./../../GlobalStorage');

let checkRequest = RequestChecker.check;
let globalStorage = GlobalStorage.getInstance();

let onGetRtValuesHandlers = {
    '1': RtValuesRouteEquipmentId1.onGetRtValues,
};
let onPutRtValuesHandlers = {
    '1': RtValuesRouteEquipmentId1.onPutRtValues,
};


function onGetRtValues (req, reply) {
    if (!checkRequest(req)) {
        reply.send('get-rt-values');
        return;
    }

    let appId = req.body.appId;
    let equipmentId = globalStorage.industrialEquipment.getByAppId(appId).equipmentId;
    onGetRtValuesHandlers[equipmentId](req, reply, equipmentId);
    reply.send('get-rt-values');
}


function onPutRtValues (req, reply) {
    if (!checkRequest(req)) {
        reply.code(401);
        return;
    }

    let appId = req.body.appId;
    let equipmentId = globalStorage.industrialEquipment.getByAppId(appId).equipmentId;
    onPutRtValuesHandlers[equipmentId](req, reply, equipmentId);
    reply.code(200);
}


module.exports = function (server, opts, done) {
    server.get('/rt-values', onGetRtValues);
    server.put('/rt-values', onPutRtValues);
    done();
};
