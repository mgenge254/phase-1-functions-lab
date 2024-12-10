function distanceFromHqInBlocks(street) {
    const hq = 42;
    return Math.abs(street - 42);
  }

  function distanceFromHqInFeet(street) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(street) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(start - destination) * 264;
  
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
  
