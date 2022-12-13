/*
Serial read using p5.webserial
Lists serial ports in a browser selection window. 
When you choose a port, it opens the port and 
displays any incoming strings as text in a text div. This makes
it accessible to screen readers.
created 31 May 2022
modified 11 Jun 2022
by Tom Igoe
*/
// variable to hold an instance of the p5.webserial library:
const serial = new p5.WebSerial();
// port chooser button:
let portButton;
// variable for incoming serial data:
let inData;

// if there's no port selected, 
// make a port select button appear:
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton("choose port");
  portButton.position(windowWidth * 0.9, 20);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}

// make the port selector window appear:
function choosePort() {
  if (portButton) portButton.show();
  serial.requestPort();
}

// function draw() {
//    background(0);
//    fill(255);
//    text("sensor value: " + inData, 30, 50);
// }

// open the selected port, and make the port 
// button invisible:
// open the selected port, and make the port
// button invisible:
function openPort() {
  // wait for the serial.open promise to return,
  // then call the initiateSerial function
  serial.open().then(initiateSerial);

  // once the port opens, let the user know:
  function initiateSerial() {
    console.log("port open");
  }
  // hide the port button once a port is chosen:
  if (portButton) portButton.hide();
}

// pop up an alert if there's a port error:
function portError(err) {
  alert("Serial port error: " + err);
}
// read any incoming data as a string
// (assumes a newline at the end of it):
function serialEvent() {
  inData = Number(serial.read());
}

// try to connect if a new serial port 
// gets added (i.e. plugged in via USB):
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}

// if a port is disconnected:
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}

function closePort() {
  serial.close();
}

function sendMoodData(dayIndex, mo){
  let dataString = mo.toString() + (dayIndex+ 1).toString();
  console.log(dataString);
  serial.println(dataString);
}

function sendStateData() {
  if (pendingState){
    serial.println("1");
    console.log("1")
  }
  else{
    serial.println("2");
    console.log("2");
  }
}