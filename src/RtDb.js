const MongoDb = require('mongodb');
const MongoClient = MongoDb.MongoClient;

class RtDb {
    constructor () {
        this.opened = false;
        this.mongoClient = new MongoClient('mongodb://localhost:27017/RtEquipmentState');
        this.mongoClient.connect((err, connection) => {
            if (err) {
                console.log();
                this.mongoClient.close();
            }
            else {
                this.pingCollection = connection.db().collection('ping');
                this.rtValuesCollection = connection.db().collection('rtValues');
                this.opened = true;
            }
        });
    }


    async writePing (equipmentId) {
        if (!this.opened) {
            return;
        }

        let query = {
            equipmentId: equipmentId
        };
        let newData = {
            $set: {
                equipmentId: equipmentId,
                ping: {
                    date: Date.now()
                }
            }
        };
        let options = {
            upsert: true
        };

        await this.pingCollection.updateOne(query, newData, options);
    }


    readPing (equipmentId) {
        if (this.opened) {
            let query = {
                equipmentId: equipmentId
            };
            return this.pingCollection.findOne(query);
        }
    }


    async writeRtValues (equipmentId, rtValues) {
        if (!this.opened) {
            return;
        }

        let query = {
            equipmentId: equipmentId
        };
        let newData = {
            $set: {
                equipmentId: equipmentId,
                rtValues: rtValues
            }
        };
        let options = {
            upsert: true
        };

        await this.rtValuesCollection.updateOne(query, newData, options);
    }


    readRtValues (equipmentId) {
        if (this.opened) {
            let query = {
                equipmentId: equipmentId
            };
            return this.rtValuesCollection.findOne(query);
        }
    }
};


module.exports = RtDb;
