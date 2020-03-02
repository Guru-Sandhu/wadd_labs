const net = require('net');
const server = net.createServer(function(socket){
    socket.setEncoding('utf8')
    socket.on("data", (data) =>{
        console.log(data.split('').reverse().join(''));
        socket.write(data.split('').reverse().join(''))
    });
});

const PORT = 5000;
const LOCALHOST = '127.0.0.1'
server.listen(PORT, LOCALHOST)