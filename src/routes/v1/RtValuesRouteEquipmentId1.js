const GlobalStorage = require('./../../GlobalStorage');

let globalStorage = GlobalStorage.getInstance();

function onGetRtValues (req, reply, equipmentId) {
};


function onPutRtValues (req, reply, equipmentId) {
    let reqData = req.body;
    let db = globalStorage.rtDb;
    let newData = {
        inductorTemperature1: reqData.inductorTemperature1,
        inductorTemperature2: reqData.inductorTemperature2,
    };
    db.writeRtValues(equipmentId, newData);
    console.log(req.body.inductorTemperature1);
}

module.exports = {
    onGetRtValues: onGetRtValues,
    onPutRtValues: onPutRtValues
};
