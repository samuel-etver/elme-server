const Constants = require('./Constants');
const GlobalStorage = require('./GlobalStorage');
const IndustrialEquipment = require('./IndustrialEquipment');
const Config = require('./Config');

let instance;

let globalStorage = GlobalStorage.getInstance();

class Application {
    constructor () {
        globalStorage.industrialEquipment = new IndustrialEquipment();
    }


    load () {
        let loadConfig = function () {
        };

        let loadIndustrialEquipment = function () {
            globalStorage.industrialEquipment.load(Constants.industrialEquipmentFileName);
        };


        loadConfig();
        loadIndustrialEquipment();
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
