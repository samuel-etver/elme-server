const Constants = require('./Constants');
const GlobalStorage = require('./GlobalStorage');
const IndustrialEquipment = require('./IndustrialEquipment');
const Config = require('./Config');
const RtDb = require('./RtDb');


let instance;

let globalStorage = GlobalStorage.getInstance();

class Application {
    constructor () {
        globalStorage.industrialEquipment = new IndustrialEquipment();
    }


    load () {
        let loadConfig = function () {
            let cfg = new Config();
            cfg.load(Constants.configFileName);
            globalStorage.config.serverPort = cfg.get('serverPort', Constants.serverPortDef);
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
