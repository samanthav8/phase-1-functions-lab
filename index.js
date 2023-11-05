// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation)
  }

  distanceFromHqInBlocks(43);

  function distanceFromHqInFeet(pickupLocation) {
    const blockDistance = distanceFromHqInBlocks(pickupLocation);
    const feetDistance = blockDistance *264;
    return feetDistance
  }

  function distanceTravelledInFeet (startBlock, endBlock){
    const blockDistance = Math.abs(endBlock - startBlock);
    const feetDistance = blockDistance * 264;
    return feetDistance
  }
  function calculatesFarePrice(startBlock, endBlock){
    const feetDistance = distanceTravelledInFeet(startBlock, endBlock);
    if (feetDistance  <= 400){
        return 0;
    } else if (feetDistance > 400 && feetDistance <= 2000){
        return (feetDistance - 400) * 0.02;
    } else if (feetDistance > 2000 && feetDistance < 2500){
        return 25;
    } else if (feetDistance >= 2500){
        return 'cannot travel that far';
    }
  }