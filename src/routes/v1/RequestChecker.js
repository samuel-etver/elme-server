const GlobalStorage = require('./../../GlobalStorage');

let globalStorage = GlobalStorage.getInstance();

function checkRequest (request) {
    let industrialEquipment = globalStorage.industrialEquipment;
    let appId = request.body.appId;
    let equipmentItem = industrialEquipment.getByAppId(appId);

    if (equipmentItem === undefined) {
        return false;
    }

    if (equipmentItem.readOnly) {
        if (request.method.toUpperCase() !== 'GET') {
            return false;
        }
    }
    else {
        if (request.ip !== equipmentItem.userIp) {
            return false;
        }
    }

    return true;
}

module.exports = {
    check: checkRequest,
};
