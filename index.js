// Code your solution in this file!
//returns the number of blocks given a value
const headQuarters = 42
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - headQuarters);
  }
distanceFromHqInBlocks(50);

// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
// passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
// the return value of distanceFromHqInBlocks can then be used to calculate feet
function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup)*264;
}

//returns the number of feet traveled
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

//returns the fare for the customer
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance<=400){
        return 0;
    }
    else if (distance>400 && distance <=2000){
        return ((distance-400)*(2/100));
    }
    else if (distance >2000 && distance <2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
  }