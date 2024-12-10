function distanceFromHqInBlocks(street) {
    const hq = 42;
    return Math.abs(street - hq);
  }

  function distanceFromHqInFeet(street) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(street) * feetPerBlock;
  }

  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(start - destination) * feetPerBlock;
  
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return ((distance - 400) * 0.02); 
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far'; 
    }
  }
  
