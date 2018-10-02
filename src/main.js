import $ from 'jquery';
import './styles.css';
import './sass/styles.scss';
import { Player } from './business.js';

// user interface logic
$(document).ready(function() {
  // console.log(Player);
  var player1 = new Player(1);
  var player2 = new Player(2);

  $("#roll1").submit(function(event) {
    event.preventDefault();
    // console.log("here");
    player1.roll = rollDice(); //calls rollDice function
    $("#rolledDice1").text(player1.roll); //shows current roll val - working
    player1.playerRoll(endofTurn);
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
    player2.playerRoll(endofTurn);
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

  function endofTurn() {
    $(".playerArea").toggle(750);
  }

  var rollDice = function() {
    return Math.floor((Math.random() * 6) + 1);
  };
});
