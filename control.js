// const oesButton = document.getElementById("oestrogen_button");
// const pogButton = document.getElementById("pogestrogen_button");

// oesButton.addEventListener("click", function(){
//   oesVisShow = !oesVisShow;
//   console.log(oesVisShow);
// });

// pogButton.addEventListener("click", function(){
//   pogVisShow = !pogVisShow;
// });



let moodWindowOpen = false;

const sadButton = document.getElementById("sad");
const lesssadButton = document.getElementById("lesssad");
const neutralButton = document.getElementById("neutral");
const lesshappyButton = document.getElementById("lesshappy");
const happyButton = document.getElementById("happy");


const controlIcon = document.getElementById("control_button");
const allWindow = document.getElementById("all_windows");
updateWindowPosition();

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

    pendingState = false;
    sendStateData();
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

  // update position
  updateWindowPosition();
});


function updateWindowPosition(){
  let topValue = window.innerHeight - allWindow.offsetHeight - 20;
  console.log(topValue);
  allWindow.style.top = topValue + "px";
}

sadButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 1;
    sendMoodData(currentDay, 1);
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();

    updateWindowPosition();
    controlIcon.src = "assets/open.png";

    updateDate();
  }
});

lesssadButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 2;
    sendMoodData(currentDay, 2);
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();

    updateWindowPosition();
    controlIcon.src = "assets/open.png";

    updateDate();
  }
});

neutralButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 3;
    sendMoodData(currentDay, 3);
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();

    updateWindowPosition();
    controlIcon.src = "assets/open.png";

    updateDate();
  }
});

lesshappyButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 4;
    sendMoodData(currentDay, 4);
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();

    updateWindowPosition();
    controlIcon.src = "assets/open.png";

    updateDate();
  }
});

happyButton.addEventListener("click", function(){
  if (currentDay < daysCount){
    moodIndex[currentDay] = 5;
    sendMoodData(currentDay, 5);
    currentDay ++;

    sadButton.style.display = "none";
    lesssadButton.style.display = "none";
    neutralButton.style.display = "none";
    lesshappyButton.style.display = "none";
    happyButton.style.display = "none";

    pendingState = false;
    sendStateData();

    updateWindowPosition();
    controlIcon.src = "assets/open.png";

    updateDate();
  }
});


const dateText = document.getElementById("date");

function updateDate(){
  let newDate = monthFeature[currentMonth - 1].text + ". " + currentDay;
  dateText.textContent = newDate;
}

updateDate();
