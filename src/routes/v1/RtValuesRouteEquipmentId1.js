const GlobalStorage = require('./../../GlobalStorage');

let globalStorage = GlobalStorage.getInstance();

const fields = [
    'date',
    'inductorTemperature1',
    'inductorTemperature2',
    'thermostatTemperature1',
    'thermostatTemperature2',
    'sprayerTemperature',
    'heatingTemperature',
    'waterFlow'
];


function onGetRtValues (req, reply, equipmentId) {
    let db = globalStorage.rtDb;
    let data = d.readRtValues(equipmentId);
    if (data) {
    }
    else {
    }
};


async function onPutRtValues (req, reply, equipmentId) {
    let db = globalStorage.rtDb;
    let reqData = req.body;
    let newData = {};
    fields.forEach(field => newData[field] = reqData[field]);
    await db.writeRtValues(equipmentId, newData);
}


module.exports = {
    onGetRtValues: onGetRtValues,
    onPutRtValues: onPutRtValues
};
