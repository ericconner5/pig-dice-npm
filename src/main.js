import $ from 'jquery';
import './styles.css';
import './sass/styles.scss';
import { Player } from './business.js';

export function endofTurn() {
  $(".playerArea").toggle(750);
}

// user interface logic
$(document).ready(function() {
  // console.log(Player);
  var player1 = new Player(1);
  var player2 = new Player(2);

  $("#roll1").submit(function(event) {
    event.preventDefault();
    // console.log("here");
    player1.roll();
    $("#rolledDice1").text(player1.currentRoll); //shows current roll val - working
    player1.handlePlayerRoll(endofTurn);
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
    player2.roll();
    $("#rolledDice2").text(player2.currentRoll); //shows current roll val - working
    player2.handlePlayerRoll(endofTurn);
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

  // function endofTurn() {
  //   $(".playerArea").toggle(750);
  // }
});
