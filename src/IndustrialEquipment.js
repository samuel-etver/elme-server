const fs = require('fs');

class IndustrialEquipment {
    constructor () {
        this.itemsByIndex = [];
        this.itemsById    = {};
    }


    load (fileName) {
        try {
            let rawdata = fs.readFileSync(fileName);
            let parsedData = JSON.parse(rawdata);
            parsedData.equipment.forEach(itemData => {
                let newItem = {
                    userId: itemData.userId,
                    userIp: itemData.userIp,
                    readOnly: itemData.readOnly,
                    equipmentId: itemData.equipmentId
                };
                if (newItem.userId && newItem.equipmentId) {
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
        this.itemsById[newItem.userId] = newItem;
    }


    size () {
        return this.itemsByIndex.length;
    }


    byIndex (index) {
        return this.itemsByIndex[index];
    }


    byId (id) {
        return this.itemsById[id];
    }
}


module.exports = IndustrialEquipment;
