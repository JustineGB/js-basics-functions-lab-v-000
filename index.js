function distanceFromHqInBlocks(someValue) {
  if (someValue > 42){
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
  //returns a distance in feet
}

function distanceTravelledInFeet(end, start) {
  let blocks = start - end;
  return blocks * 264;
  // Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
}

// function calculatesFarePrice(someValue) {
//   distanceTravelledInFeet(someValue);
//   // Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
// }


