const Constants = require('./Constants');
const GlobalStorage = require('./GlobalStorage');
const IndustrialEquipment = require('./IndustrialEquipment');

let instance;

let globalStorage = GlobalStorage.getInstance();

class Application {
    constructor () {
        globalStorage.industrialEquipment = new IndustrialEquipment();
    }


    load () {
        globalStorage.industrialEquipment.load();
    }
}


module.exports = {
    getInstance: function () {
        if (!instance) {
            instance = new Application();
        }
        return instance;
    }
};
