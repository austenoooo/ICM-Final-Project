// // let moodWindowOpen = false;
// // let periodWindowOpen = false;


// function mainVisGui(){
//   displayDay();
  
//   let windowW = width / 4.5;
//   let windowH = height / 12;
//   let margin = 10;
//   allWindow(windowW, windowH, margin);
// }

// function displayDay(){
//   fill(textColor);
//   textAlign(LEFT, CENTER);
//   textFont('forma-djr-banner');
//   textSize(width / 25);
//   text(monthText + ".  " + (currentDay + 1), 20, width /25  - 10);
// }

// function allWindow(windowW, windowH, margin){
//   stroke(textColor);
//   noFill();
//   strokeWeight(2);
  
  
//   // from bottom to top
//   // colorWindow
//   // let colorWindowY = height - windowH * 1 - margin * 1;
//   // let colorWindowX = margin;
//   // rect(colorWindowX, colorWindowY, windowW, windowH, 5, 5, 5, 5);
  
//   // periodWindow
//   let periodWindowY = height - windowH * 1 - margin * 1;
//   let periodWindowX = margin;
//   rect(periodWindowX, periodWindowY, windowW, windowH, 5, 5, 5, 5);
//   image(open, windowW - margin * 3, periodWindowY + margin * 2.5, open.width * 0.6, open.height * 0.6);
  
//   let moodWindowY;
//   let moodWindowX;
//   // moodWindow
//   if (!moodWindowOpen){
//     moodWindowY = height - windowH * 2 - margin * 2;
//     moodWindowX = margin;
//     rect(moodWindowX, moodWindowY, windowW, windowH, 5, 5, 5, 5);
//     image(open, windowW - margin * 3, moodWindowY + margin * 2.5, open.width * 0.6, open.height * 0.6);
//   }
//   else{
//     moodWindowY = height - windowH * 2 - margin * 2 + height * 0.3;
//     moodWindowX = margin;
//     rect(moodWindowX, moodWindowY, windowW, windowH, 5, 5, 5, 5);
//     image(close, windowW - margin * 3, moodWindowY + margin * 2.5 + height * 0.3, open.width * 0.6, open.height * 0.6);
//   }
  
//   // all the text
//   textSize(width / 65);
//   fill(textColor);
//   noStroke();
//   // text("Change your color", colorWindowX + 15, height - windowH * 0.5 - margin * 1);
//   text("+ Add period", periodWindowX + 15, height - windowH * 0.5 - margin * 1);
//   text("How do you feel today?", moodWindowX + 15, height - windowH * 1.5 - margin * 2);
  
//   // icon
  
// }

// function mousePressed(){
//   if (moodWindowOpen){
//     if (x > windowW - margin * 3 && x < windowW - margin * 3 + open.width * 0.6 && y > moodWindowY + margin * 2.5 + height * 0.3 && y < moodWindowY + margin * 2.5 + height * 0.3 + open.height * 0.6){
//       moodWindowOpen = true;
//     }
//   }
//   else{
//     if (x > windowW - margin * 3 && x < windowW - margin * 3 + open.width * 0.6 && y > moodWindowY + margin * 2.5 && y < moodWindowY + margin * 2.5 + open.height * 0.6){
//       moodWindowOpen = true;
//     }
//   }
// }
