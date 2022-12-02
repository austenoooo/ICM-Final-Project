let moodIndex = [1, 2, 3, 3, 5, 4, 3, 2, 5, 3, 4, 5, 5, 3, 3, 4, 1, 2, 3, 3, 4, 4, 5, 5, 3, 2, 2, 1, 1, 0];
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

let currentDay = 28; // current day start with 0
let currentMonth = 11;
let daysCount = monthFeature[currentMonth - 1].dayCount;
let monthText = monthFeature[currentMonth - 1].text;

let moodPoints = [];
let innerCircleIndex = 0.3;
let outerRingIndex = 1 - innerCircleIndex;

// different color palette options
let colorPalette = ["#FFB2E6", "#D972FF", "#8447FF", "#8CFFDA", "#C6FFE1", "#FFFFE8"];
// let colorPalette = ["#F27EA9", "#F27EA9", "#366CD9", "#5EADF2", "#636E73", "#F2E6D8", "#F2F2F2"];
// let colorPalette = ["#70d6ff", "#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#e9ff70", "#e9ff70"];

// icon assets
let openIcon;
let closeIcon;

// start with the first page
let currentPage = 3;

// period related parameters 
let periodDuration = 6;
let cycleDuration = 30;
let lastPeriodDay = 20;
let lastPeriodMonth = 10;

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


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textFont('forma-djr-banner');
  textAlign(CENTER, CENTER);

  // blendMode(MULTIPLY);
}

function draw() {
  background(0);
  let radius = min(width * 0.4, height * 0.4);

  // How many days does your period last?
  if (currentPage == 0){

  }
  // What is your cycle duration
  else if (currentPage == 1){

  }
  // Tell us the first day of your last period
  else if (currentPage == 2){

  }
  // the visualization
  else{
    visualization(radius);
    push();
    blendMode(LIGHTEST);
    if (oesVisShow){
      oestrogenVis(radius);
    }
    if (pogVisShow){
      pogestrogenVis(radius);
    }
    pop();

    mainVisGui();
  }
 

  // the black circle in the center
  fill(0);
  noStroke();
  circle(width/2, height/2, radius * (innerCircleIndex + 0.05) * 2);
}









