
var instance;

class GlobalStorage {
    constructor() {
        this.config = {};
    }
}

module.exports = {
    getInstance: () => {
        if (!instance) {
            instance = new GlobalStorage();
        }
        return instance;
    }
}
