let pogestrogenIndex = [];

// standard oestrogen index starting from the first day of last period
let stdPosIndex = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 8, 9, 10, 10, 10, 9, 8, 7, 5, 2, 1, 1, 1]

// calcualate hte oestrogen index based on the period parameters
// starting from the last day of period
let arrayFormerPos;
let arrayLatterPos;
if (lastPeriodMonth == currentMonth){
  arrayLatterPos = stdPosIndex.slice(0, monthFeature[currentMonth-1].dayCount - lastPeriodDay + 1);
  arrayFormerPos = stdPosIndex.slice(monthFeature[currentMonth-1].dayCount - lastPeriodDay, monthFeature[currentMonth].dayCount);
}
else{
  arrayFormerPos = stdPosIndex.slice(monthFeature[currentMonth-1].dayCount - lastPeriodDay, -1);
  arrayLatterPos = stdPosIndex.slice(0, monthFeature[currentMonth-1].dayCount - arrayFormerPos.length + 1);
}
pogestrogenIndex = arrayFormerPos.concat(arrayLatterPos);
console.log(pogestrogenIndex.length);
console.log(pogestrogenIndex);



function pogestrogenVis(radius){
  let centerX = width/2;
  let centerY = height/2;
  let angleIncrement = 2 * PI / daysCount;

  beginShape();
  for (let i = 0; i < daysCount; i++){
    let angle = i * angleIncrement;
    // let alteredRadiusStart = radius * (innerCircleIndex + 0.05);
    let alteredRadiusEnd = radius * (innerCircleIndex + outerRingIndex / 10 * pogestrogenIndex[i])
    // let xStart = centerX + sin(angle) * alteredRadiusStart;
    // let yStart = centerY - cos(angle) * alteredRadiusStart;
    let xEnd = centerX + sin(angle) * alteredRadiusEnd;
    let yEnd = centerY - cos(angle) * alteredRadiusEnd;

    let c = color(colorPalette[3]);
    c.setAlpha(80);
    fill(c);
    curveVertex(xEnd, yEnd);
    // push();
    // stroke(0, 0, 255, 100);
    // strokeCap(SQUARE);
    // strokeWeight(14);
    // line(xStart, yStart, xEnd, yEnd);
    // pop();
  }
  endShape(CLOSE);
}



