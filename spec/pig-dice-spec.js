import { Player } from './../src/business.js';

describe('Player', function() {

  it('should register that someone clicked a button and created a new player', function() {
    var player1 = new Player(1);
    var player2 = new Player(2);
    expect(typeof player1).toEqual("object");
    expect(typeof player2).toEqual("object");
  });

  it('should test that roll method attributes number to player', function() {
    var player1 = new Player(1);
    player1.roll();
    expect(typeof player1.currentRoll).toEqual('number');
  });

  it('should test that roll method attributes a number from 1-6', function() {
    var player1 = new Player(1);
    player1.roll();
    var i = player1.currentRoll;
    expect(i).toBeGreaterThan(0);
    expect(i).toBeLessThan(7);
  });

  it('should test that roll method will reset the tempScore if roll = 1', function() {
    var player1 = new Player(1);
    player1.currentRoll = 1;
    player1.handlePlayerRoll();
    expect(player1.tempScore).toBeLessThan(1);
  });

  it('should test that roll method will reset the tempScore if roll = 1', function() {
    var player1 = new Player(1);
    player1.roll();
    player1.handlePlayerRoll();
    var i = player1.tempScore;
    expect(i).toBeGreaterThan(1);
  });
});


// if (i === 0) {
//   expect(i).toBeLessThan(1);
// } else if (i !== 0 {
//   expect(i).toBeGreaterThan(0);
// })

// If they click roll again the new roll is added to the previous roll value.
// Example Input: click "roll" - "4", click "roll" - "2"
// Example Output: "6"
//
// After clicking roll they now have the choice for a second button that allows them to hold. If clicked the number goes to a permanent score.
// Example Input: click "hold"
// Example Output: "4"
//
// After clicking hold, the roll number and temporary score slots are reset to 0
// Example Input: "roll" = "2", click "roll" = "3", click "hold"
// Example Output: "0" at roll / "0" at temporary score
//
// If a 1 is rolled all temporary score is erased.
// Example Input: "1"
// Example Output: "0"
//
// Above specs are repeated with Player 2
// Example Input: Rolls Dice chooses to hold or roll again
// Example Output: "3"
//
// If a 1 is rolled the turn moves to the next player.
// Example Input: "1"
// Example Output: "End of Turn"
// -----
// First player to 100 point permanent cap is winner
// Example Input: Rolls Dice & holds
// Example Output: "100pts - You win!"
