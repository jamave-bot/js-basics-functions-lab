// Code your solution in this file!


function distanceFromHqInBlocks (street) {
    return Math.abs(42-street)
  }
  
  function distanceFromHqInFeet (street) {
    return distanceFromHqInBlocks(street)* 264;
  } 

  function distanceTravelledInFeet(num1, num2){
    return Math.abs(num1 - num2) * 264;
  }

  function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500){
        return 'cannot travel that far'
    } else if (distance > 2000 && distance <= 2500) {
        return  25;
    }else if (distance <= 400){
        return 0;
    }
     else {
        return (.02 * (distance - 400))
    }
  }