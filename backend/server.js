const http = require('http');
const app = require('./app');
const server = http.createServer(app);


const port = parseInt(process.env.port) || 3800;
app.set('port', port);

server.listen(port);

