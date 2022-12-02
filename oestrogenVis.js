let oestrogenIndex = [];

// standard oestrogen index starting from the first day of last period
let stdOesIndex = [2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 8, 4, 2, 1, 2, 2, 3, 3, 4, 4, 3, 2, 2, 1, 1, 1, 1, 2]

// calcualate hte oestrogen index based on the period parameters
// starting from the last day of period
let arrayFormerOes;
let arrayLatterOes;
if (lastPeriodMonth == currentMonth){
  arrayLatterOes = stdOesIndex.slice(0, monthFeature[currentMonth-1].dayCount - lastPeriodDay + 1);
  arrayFormerOes = stdOesIndex.slice(monthFeature[currentMonth-1].dayCount - lastPeriodDay, monthFeature[currentMonth].dayCount);
}
else{
  arrayFormerOes = stdOesIndex.slice(monthFeature[currentMonth-1].dayCount - lastPeriodDay, -1);
  arrayLatterOes = stdOesIndex.slice(0, monthFeature[currentMonth-1].dayCount - arrayFormerOes.length + 1);
}
oestrogenIndex = arrayFormerOes.concat(arrayLatterOes);
console.log(oestrogenIndex.length);
console.log(oestrogenIndex);



function oestrogenVis(radius){
  let centerX = width/2;
  let centerY = height/2;
  let angleIncrement = 2 * PI / daysCount;

  beginShape();
  for (let i = 0; i < daysCount; i++){
    let angle = i * angleIncrement;
    // let alteredRadiusStart = radius * (innerCircleIndex + 0.05);
    let alteredRadiusEnd = radius * (innerCircleIndex + outerRingIndex / 10 * oestrogenIndex[i])
    // let xStart = centerX + sin(angle) * alteredRadiusStart;
    // let yStart = centerY - cos(angle) * alteredRadiusStart;
    let xEnd = centerX + sin(angle) * alteredRadiusEnd;
    let yEnd = centerY - cos(angle) * alteredRadiusEnd;

    let c = color(colorPalette[0]);
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



