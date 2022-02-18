const fs = require('fs');

class IndustrialEquipment {
    constructor () {
        this.itemsByIndex  = [];
        this.itemsByAppId = {};
    }


    load (fileName) {
        try {
            let rawdata = fs.readFileSync(fileName);
            let parsedData = JSON.parse(rawdata);
            parsedData.equipment.forEach(itemData => {
                let newItem = {
                    appId: itemData.appId,
                    userIp: itemData.userIp,
                    readOnly: itemData.readOnly.toLowerCase === 'false',
                    equipmentId: itemData.equipmentId
                };
                if (newItem.appId && newItem.equipmentId) {
                    this.add(newItem);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }


    add (newItem) {
        this.itemsByIndex.push(newItem);
        this.itemsByAppId[newItem.appId] = newItem;
    }


    size () {
        return this.itemsByIndex.length;
    }


    getByIndex (index) {
        return this.itemsByIndex[index];
    }


    getByAppId (id) {
        return this.itemsByAppId[id];
    }
}


module.exports = IndustrialEquipment;
