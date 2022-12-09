const oesButton = document.getElementById("oestrogen_button");
const pogButton = document.getElementById("pogestrogen_button");

oesButton.addEventListener("click", function(){
  oesVisShow = !oesVisShow;
  console.log(oesVisShow);
});

pogButton.addEventListener("click", function(){
  pogVisShow = !pogVisShow;
});

let moodWindowOpen = false;


const sadButton = document.getElementById("sad");
const lesssadButton = document.getElementById("lesssad");
const neutralButton = document.getElementById("neutral");
const lesshappyButton = document.getElementById("lesshappy");
const happyButton = document.getElementById("happy");


const controlIcon = document.getElementById("control_button");
console.log(controlIcon);

controlIcon.addEventListener("click", function(){
  console.log("clicked");
  // close the window
  if (moodWindowOpen){
    controlIcon.src = "assets/open.png";
    moodWindowOpen = false;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";
  }
  // open the window
  else{
    controlIcon.src = "assets/close.png"
    moodWindowOpen = true;

    sadButton.style.display = "block";
    lesssadButton.style.display = "block";
    neutralButton.style.display = "block";
    lesshappyButton.style.display = "block";
    happyButton.style.display = "block";

    pendingState = true;
    sendStateData();
  }
});

sadButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 1;
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();
    sendMoodData();
  }
});

lesssadButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 2;
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();
    sendMoodData();
  }
});

neutralButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 3;
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();
    sendMoodData();
  }
});

lesshappyButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 4;
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();
    sendMoodData();
  }
});

happyButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 5;
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();
    sendMoodData();
  }
});


