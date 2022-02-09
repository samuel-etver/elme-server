'use strict';

const fastify = require('fastify');
const Application = require('./Application');

let application = Application.getInstance();
let server = fastify({logger: true});



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


    server.get('/ping', function (req, reply) {
        reply.send({});
    });


    server.post('/rt-values', function (req, reply) {
        console.log(req.body);
        reply.send({});
    });


    server.get('/rt-alerts', function (req, reply) {
        reply.send({});
    });

    server.listen(8000, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
    });
}
