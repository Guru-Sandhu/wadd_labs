const net = require('net');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.setEncoding('utf8')

client.on('data', function(data) {
  console.log(data);
})

const PORT = 5000;
const LOCALHOST = '127.0.0.1';
client.connect(PORT, LOCALHOST, function() {
    rl.question('Pass A String of Numbers (with Commas) \n', (data) => {
        client.write(data)
        rl.close();
    })
})