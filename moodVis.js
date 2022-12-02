function visualization(radius){

  // display the day texts
  displayDays(radius, daysCount);
  
  // display the mood
  displayRect(radius, daysCount);

  // black cover
  fill(0, 0, 0, 100);
  // circle(width/2, height/2, radius * 2.1);
}


function displayRect(radius, totalDays){
  moodPoints = [];
  
  let centerX = width/2;
  let centerY = height/2;
  let angleIncrement = 2 * PI / totalDays;

  
  // calculate the position
  for (let i = 0; i < totalDays; i++){
    let angle = i * angleIncrement;
    let xMax = centerX + sin(angle) * radius;
    let yMax = centerY - cos(angle) * radius;
    
    // draw the background line
    push();
    stroke(30);
    strokeCap(SQUARE);
    strokeWeight(14);
    line(centerX, centerY, xMax, yMax);
    pop();
    
    // animate this part
    push();
    translate(centerX, centerY)
    rotate(angle);
    gradientRect(radius, i);
    pop();
    // draw the gradient rect
  }

}

function gradientRect(radius, id){
  for (let c = 0; c < moodIndex[id]; c++){
    let colorStart = color(colorPalette[c]);
    let colorEnd = color(colorPalette[c+1]);
    let totalSteps = radius * outerRingIndex / 5;
    for (let y = 0; y < totalSteps; y++){
      let currentColor = lerpColor(colorStart, colorEnd, y/totalSteps);
      let circleRadius = radius * innerCircleIndex + c * totalSteps + y;
      noFill();
      stroke(currentColor);
      strokeWeight(2);
      // circle(centerX, centerY, circleRadius * 2);
      line(-6, -circleRadius, 6, -circleRadius);
    }
  }
  
  // gradient cap
  // if (moodLevel != 0){
  //   fill(colorPalette[moodLevel]);
  //   let radiusMax = radius * (innerCircleIndex + outerRingIndex / 5 * moodLevel)
  //   noStroke();
  //   arc(0, -radiusMax+1, 14, 14, PI, 0);
  // }
}

function drawRadialGradient(radius){
  let centerX = width/2;
  let centerY = height/2;
  
  fill(color(colorPalette[0]));
  circle(centerX, centerY, radius * innerCircleIndex * 2);
  
  fill(0);
  circle(centerX, centerY, radius * innerCircleIndex * 2 * 0.8);
  
  // there is five color in total
  for (let c = 0; c < 5; c++){
    let colorStart = color(colorPalette[c]);
    let colorEnd = color(colorPalette[c+1]);
    let totalSteps = radius * outerRingIndex / 5;
    for (let y = 0; y < totalSteps; y++){
      let currentColor = lerpColor(colorStart, colorEnd, y/totalSteps);
      currentColor.setAlpha(70);
      let circleRadius = radius * innerCircleIndex + c * totalSteps + y;
      noFill();
      stroke(currentColor);
      strokeWeight(2);
      circle(centerX, centerY, circleRadius * 2);
    }
  }
  
}

// display the days on the circle
function displayDays(radius, totalDays){
  let centerX = width/2;
  let centerY = height/2;
  let angleIncrement = 2 * PI / totalDays;
  
  for (let i = 0; i < totalDays; i+=1){
    let angle = i * angleIncrement;
    let x = centerX + sin(angle) * radius * 1.1;
    let y = centerY - cos(angle) * radius * 1.1;
    
    noStroke();
    fill(255);
    textSize(radius / 23);
    textFont('forma-djr-banner');
    textAlign(CENTER, CENTER)
    text((i + 1).toString(), x, y);
  }
}


function sum(array, start, end){
  let sum = 0;
  for(let i = start; i < end; i++){
    sum += array[i];
  }
  return sum;
}


