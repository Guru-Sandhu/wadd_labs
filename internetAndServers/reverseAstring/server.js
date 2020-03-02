const net = require('net');
const server = net.createServer(function(socket){
    socket.setEncoding('utf8')
    socket.on("data", (data) =>{
        let number = data.split(',').map(Number)
        console.log(Math.max(...number).toString())
        socket.write(Math.max(...number).toString())
    });
});

const PORT = 5000;
const LOCALHOST = '127.0.0.1'
server.listen(PORT, LOCALHOST)