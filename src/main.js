import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './sass/styles.scss';

// business logic

//creates our constructor
function Player(name) {
  this.name = name;
  this.roll = 0;
  this.tempScore = 0;
  this.permScore = 0;
}

// creates random roll 1-6 WORKS
var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
};

//hides the play area of the player whos turn it isn't
function endofTurn() {
  $(".playerArea").toggle(750);
}

Player.prototype.playerRoll = function() { //call function - WORKS
  if(this.roll === 1) {
    this.tempScore = 0;
    endofTurn();
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


// user interface logic
$(document).ready(function() {
  var player1 = new Player(1);
  var player2 = new Player(2);

  $("#roll1").submit(function(event) {
    event.preventDefault();
    player1.roll = rollDice(); //calls rollDice function
    $("#rolledDice1").text(player1.roll); //shows current roll val - working
    player1.playerRoll();
    $("#tempTotal1").text(player1.tempScore);
  });

  $("#hold1").submit(function(event) {
    event.preventDefault();
    player1.hold();
    $("#rolledDice1").text("0");
    $("#tempTotal1").text("0");
    $("#permTotal1").text(player1.permScore);
    player1.tempScore = 0; //shows the total score
    endofTurn();
    wintheGame();
  });

  $("#roll2").submit(function(event) {
    event.preventDefault();
    player2.roll = rollDice(); //calls rollDice function
    $("#rolledDice2").text(player2.roll); //shows current roll val - working
    player2.playerRoll();
    $("#tempTotal2").text(player2.tempScore);
  });

  $("#hold2").submit(function(event) {
    event.preventDefault();
    player2.hold();
    $("#rolledDice2").text("0");
    $("#tempTotal2").text("0");
    $("#permTotal2").text(player2.permScore);
    player2.tempScore = 0; //shows the total score
    endofTurn();
    wintheGame();
  });

  function wintheGame() {
    if (player1.permScore >= 20 || player2.permScore >= 20) {
      $("#win").show();
    }
  }
});
