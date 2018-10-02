// business logic

//creates our constructor
export function Player(name, roll, tempScore, permScore) {
  this.name = name;
  this.roll = 0;
  this.tempScore = 0;
  this.permScore = 0;
}

Player.prototype.playerRoll = function(callback) { //call function - WORKS
  if(this.roll === 1) {
    this.tempScore = 0;

    // do something with front end
    callback();

    this.roll = 0;
  } else {
    this.tempScore += this.roll;
    return;
  }
};

Player.prototype.hold = function() { //WORKS
  this.permScore += this.tempScore;
  this.tempScore = 0;
  return;
};
