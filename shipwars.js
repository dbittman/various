var ticks = 0;
var tspeed = 4;
function reset() {
	ticks = 0;
  warp(2);
}

function target() {
  return enemyBearing();
}

function selectOffset(a) {
  opt1 = a + Math.PI / 2;
  opt2 = a - Math.PI / 2;
  if(Math.abs(heading() - opt1) < Math.abs(heading() - opt2))
    return opt1;
  else
    return opt2; 
}

function update() {
	ticks++;
  if(torpedoDistance() < 300) {
    turnTo(selectOffset(torpedoBearing()));    
    warp(9);
  }
  else if(torpedoes() > 1 && enemyDistance() > 200) {
  	warp(7);
    turnTo(enemyBearing());
  } else if(torpedoes() > 1) {
    warp(4);
    turnTo(enemyBearing());
  }
  else
  {
    turnTo(selectOffset(enemyBearing()));
    warp(8);
  }
  if(torpedoes() > 0 && enemyDistance() < 150
          && (Math.abs(Math.sin(enemyHeading() - enemyBearing())) < 0.2)
              || enemyDistance() < 10)
  {
			fire(target());
      turnTo(selectOffset(enemyBearing()));
  }
}
