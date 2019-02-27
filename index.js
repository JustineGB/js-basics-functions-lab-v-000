function distanceFromHqInBlocks(someValue) {
  if (someValue > 42)
    {return someValue - 42;} 
  else 
    {return 42 - someValue;}
}

function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
  //returns a distance in feet
}

function distanceTravelledInFeet(start, end ) {
  if (start > end) {
    let blocks = start - end;
    return blocks * 264;}
  else {
    let blocks = end - start;
    return blocks * 264;}
}

function calculatesFarePrice(start, end) {
  var x = distanceTravelledInFeet(start, end);
  return x;
}


