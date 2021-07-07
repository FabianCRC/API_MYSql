const express = require('express');
const server = express();

//Server Settings
server.set('port', process.env.port || 4000);


//Middlewares
server.use(express.json());

//Routes
server.use(require('./routes/employees'));

server.listen(server.get('port'), () => {
    console.log('Server working at port', server.get('port'));
});