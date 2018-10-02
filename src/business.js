// business logic
import { endofTurn } from './main.js';
//creates our constructor
export function Player() {
  this.name = name;
  this.currentRoll = 0;
  this.tempScore = 0;
  this.permScore = 0;
}

Player.prototype.roll = function() {
  this.currentRoll = Math.floor((Math.random() * 6) + 1);
};

Player.prototype.handlePlayerRoll = function() {
  if(this.currentRoll === 1) {
    this.tempScore = 0;
     //toggles to the next player on UI
    endofTurn();
  } else {
    this.tempScore += this.currentRoll;
  }
};

Player.prototype.hold = function() { //WORKS
  this.permScore += this.tempScore;
  this.tempScore = 0;
  // return;
};
