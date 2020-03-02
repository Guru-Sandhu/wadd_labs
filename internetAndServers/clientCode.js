const net = require('net');

const client = new net.Socket();

client.setEncoding('utf8')
client.on('data', (data) => {
    console.log('Data Received from server: ' + data);
})

client.connect(5000,'127.0.0.1', () => client.write('Guru'));