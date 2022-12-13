let moodIndex = [1, 2, 3, 3, 5, 4, 3, 2, 5, 3, 4, 5, 5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let monthFeature = [
  {text: "JAN", dayCount: 31},
  {text: "FEB", dayCount: 29},
  {text: "MAR", dayCount: 31},
  {text: "APR", dayCount: 30},
  {text: "MAY", dayCount: 31},
  {text: "JUN", dayCount: 30},
  {text: "JUL", dayCount: 31},
  {text: "AUG", dayCount: 31},
  {text: "SEPT", dayCount: 30},
  {text: "OCT", dayCount: 31},
  {text: "NOV", dayCount: 30},
  {text: "DEC", dayCount: 31}
];

let currentDay = 15; // current day start with 0
let currentMonth = 11;
let daysCount = monthFeature[currentMonth - 1].dayCount;
let monthText = monthFeature[currentMonth - 1].text;

let moodPoints = [];
let innerCircleIndex = 0.3;
let outerRingIndex = 1 - innerCircleIndex;

// different color palette options
// let colorPalette = ["#FFB2E6", "#D972FF", "#8447FF", "#8CFFDA", "#C6FFE1", "#FFFFE8", "#FFFFE8"];
// let colorPalette = ["#292F32", "#292F32", "#636E73", "#366CD9", "#5EADF2", "#F27EA9", "#F27EA9"];
// let colorPalette = ["#70d6ff", "#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#e9ff70", "#e9ff70"];
// let colorPalette = ["#ffbe0b", "#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff", "#3a86ff"];
// let colorPalette = ["#3a86ff", "#3a86ff", "#8338ec", "#ff006e", "#fb5607", "#ffbe0b", "#ffbe0b"];

let colorPalette = ["#3a86ff", "#3a86ff", "#8338ec", "#ff006e", "#fb5607", "#ffbe0b", "#ffbe0b"];

// icon assets
let openIcon;
let closeIcon;

// start with the first page
let currentPage = 3;

// period related parameters 
let periodDuration = 6;
let cycleDuration = 30;
let lastPeriodDay = 3;
let lastPeriodMonth = 11;

// showing the oestrogen level & pogestrogen level
let oesVisShow = false;
let pogVisShow = false;


// calculate the ovulation day
let ovulationMonth;
let ovulationDay;

ovulationDay = lastPeriodDay + cycleDuration - 14;
if (ovulationDay > monthFeature[lastPeriodMonth-1].dayCount){
  ovulationDay = ovulationDay - monthFeature[lastPeriodMonth-1].dayCount;
  ovulationMonth = lastPeriodMonth + 1;
}
else if (ovulationDay < 0){
  ovulationDay += monthFeature[lastPeriodMonth-2].dayCount;
  ovulationMonth = lastPeriodMonth - 1;
}
else{
  ovulationMonth = currentMonth
}
console.log(ovulationDay, ovulationMonth);

// different light state
let pendingState = false;

// just for demo
let q1;
let q2;
let q3;
let q4;

// icon images
let open;
let close;

// define color
const backgroundColor = 0;
const textColor = 255;
const rectColor = 30;

function preload(){
  q1 = loadImage("assets/1.png");
  q2 = loadImage("assets/2.png");
  q3 = loadImage("assets/3.png");
  q4 = loadImage("assets/4.png");
  open = loadImage("assets/open.png");
  close = loadImage("assets/close.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('forma-djr-banner');
  textAlign(CENTER, CENTER);

  // For p5 webserial communication
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton)
  // add serial connect/disconnect listeners:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
}

function draw() {
  background(backgroundColor);
  let radius = min(width * 0.4, height * 0.4);

  // How many days does your period last?
  if (currentPage == 0){
    image(q1, 100, 0, height/q4.height*q4.width, height);
    
    pendingState = true;
    sendStateData();
  }
  // What is your cycle duration
  else if (currentPage == 1){
    image(q2, 100, 0, height/q4.height*q4.width, height);

    pendingState = true;
    sendStateData();
  }
  // Tell us the first day of your last period
  else if (currentPage == 2){
    image(q3, 100, 0, height/q4.height*q4.width, height);

    pendingState = true;
    sendStateData();
  }
  // // choose your color palette
  // else if (currentPage == 3){
  //   image(q4, 100, 0, height/q4.height*q4.width, height);

  //   pendingState = true;
  //   sendStateData();
  // }
  // the visualization
  else{
    // pendingState = false;
    // sendStateData();

    visualization(radius);
    // the oestrogen and pogestrogen level
    if (oesVisShow){
      oestrogenVis(radius);
    }
    if (pogVisShow){
      pogestrogenVis(radius);
    }
    // mainVisGui();

    // the black circle in the center
    fill(backgroundColor);
    noStroke();
    circle(width/2, height/2, radius * (innerCircleIndex + 0.05) * 2);
  }
  
}


function mousePressed(){
  if (currentPage < 4){
    currentPage += 1;
  }
}




