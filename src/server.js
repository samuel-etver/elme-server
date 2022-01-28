const fastify = require('fastify');

const app = fastify({logger: true});

app.get('/', function (req, reply) {
    reply.send({hello: 'world'});
});

app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info('');
});

console.log("TEST");
