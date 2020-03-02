const net = require('net');

const server = net.createServer( (socket) => {
    socket.setEncoding('utf8');
    socket.on('data', (data) => {
        console.log('Server received Data: ')
        console.log(data);
        socket.write('thanks for that comment:' + data) 
    });
});

const PORT = 5000;
const LOCALHOST = '127.0.0.1';
server.listen( PORT , LOCALHOST );