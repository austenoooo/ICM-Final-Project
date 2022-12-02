function mainVisGui(){
  displayDay();
  
  let windowW = width / 4.5;
  let windowH = height / 12;
  let margin = 10;
  allWindow(windowW, windowH, margin);
}

function displayDay(){
  fill(255);
  textAlign(LEFT, CENTER);
  textFont('forma-djr-banner');
  textSize(width / 25);
  text(monthText + ".  " + (currentDay + 1), 20, width /25  - 10);
}

function allWindow(windowW, windowH, margin){
  stroke(255);
  noFill();
  
  
  // from bottom to top
  // colorWindow
  let colorWindowY = height - windowH * 1 - margin * 1;
  let colorWindowX = margin;
  rect(colorWindowX, colorWindowY, windowW, windowH, 5, 5, 5, 5);
  
  // periodWindow
  let periodWindowY = height - windowH * 2 - margin * 2;
  let periodWindowX = margin;
  rect(periodWindowX, periodWindowY, windowW, windowH, 5, 5, 5, 5);
  
  // moodWindow
  let moodWindowY = height - windowH * 3 - margin * 3;
  let moodWindowX = margin;
  rect(moodWindowX, moodWindowY, windowW, windowH, 5, 5, 5, 5);
  
  
  // all the text
  textSize(width / 65);
  fill(255);
  noStroke();
  text("Change your color", colorWindowX + 15, height - windowH * 0.5 - margin * 1);
  text("+ Add period", periodWindowX + 15, height - windowH * 1.5 - margin * 2);
  text("How do you feel today?", moodWindowX + 15, height - windowH * 2.5 - margin * 3);
  
  // icon
  
}
