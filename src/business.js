// business logic

//creates our constructor
export function Player() {
  this.name = name;
  this.currentRoll = 0;
  this.tempScore = 0;
  this.permScore = 0;
}

// var rollDice = function() {
//   return
// };

Player.prototype.roll = function() {
  this.currentRoll = Math.floor((Math.random() * 6) + 1);
};

Player.prototype.playerRoll = function(callback) {
  if(this.currentRoll === 1) {
    this.tempScore = 0;
    // do something with front end
    callback();
    this.currentRoll = 0;
  } else {
    this.tempScore += this.currentRoll;
    // return;
  }
};

Player.prototype.hold = function() { //WORKS
  this.permScore += this.tempScore;
  this.tempScore = 0;
  // return;
};
