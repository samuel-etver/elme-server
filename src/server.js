const GlobalStorage = require('./GlobalStorage');
const fastify = require('fastify');
const Application = require('./Application');
const Constants = require('./Constants');

let application = Application.getInstance();
let server = fastify({logger: true});
let globalStorage = GlobalStorage.getInstance();



load();
start();



function load () {
    application.load();
}


function start () {
    startServer();
}


function startServer () {
    server.get('/', function (req, reply) {
        reply.send({hello: 'world'});
    });

    server.register(require('./routes/v1/PingRoute'),      {prefix: Constants.prefixV1});
    server.register(require('./routes/v1/RtValuesRoute'),  {prefix: Constants.prefixV1});
    server.register(require('./routes/v1/RtAlertsRoute'),  {prefix: Constants.prefixV1});

    server.listen(globalStorage.config.serverPort, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
    });
}
