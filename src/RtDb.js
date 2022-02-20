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
                this.rtValuesCollection = connection.db().collection('rtValues');
                this.opened = true;
            }
        });
    }


    writeRtValues (equipmentId, rtValues) {
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

        this.rtValuesCollection.updateOne(query, newData, options);
    }


    readRtValues (equipmentId) {

    }
};


module.exports = RtDb;
