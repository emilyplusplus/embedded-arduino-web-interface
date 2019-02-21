var SerialPort = require('serialport');

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let cmd = document.getElementById("cmd")
let send = document.getElementById("send")
let response = document.getElementById("response")

var serialPort = new SerialPort('/dev/cu.usbmodem14101', {
    baudRate: 9600
});

// Switches the port into "flowing mode"
serialPort.on('data', function (data) {
    response.value += data
});

// Read data that is available but keep the stream from entering //"flowing mode"
serialPort.on('readable', function () {
    response.value += serialPort.read()
});

send.onclick = function() {
    console.log(cmd.value)
    serialPort.write(cmd.value)
    cmd.value = ''
}
