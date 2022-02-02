const fastify = require('fastify');

const app = fastify({logger: true});

app.get('/', function (req, reply) {
    reply.send({hello: 'world'});
});


app.get('/ping', function (req, reply) {
    console.log("asdasd");
    reply.send({});
});


app.get('/rt-values', function (req, reply) {
    reply.send({});
});


app.get('/rt-alerts', function (req, reply) {
    reply.send({});
});

app.listen(8000, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info('');
});

console.log("TEST");
