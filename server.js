const http = require('http');

require('dotenv').config();
const app = require('./app');

const server=  http.createServer(app);
const port = 8001 || process.env.port;

server.listen(port,()=>{
    console.log(`Server running on ${port}`)
});