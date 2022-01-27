function Player (name) {
  this.currentRoll = 0;
  this.runningTotal = 0;
  this.totalScore = 0;
  this.name = name;
}

let currentPlayer = "playerOne";

function switchPlayer(currentPlayer) {
  if (currentPlayer === "playerOne") {
    currentPlayer = "playerTwo";
    return currentPlayer;
  }
  else if (currentPlayer === "playerTwo"){
    currentPlayer = "playerOne";
    return currentPlayer;
  }
}

Player.prototype.addRunningTotal = function() {
  this.runningTotal += this.currentRoll;
  return this.runningTotal;
};

Player.prototype.addTotalScore = function() {
  this.totalScore += this.runningTotal;
  this.runningTotal = 0;
  console.log("running total", this.runningTotal);
  currentPlayer = switchPlayer(currentPlayer);
  return this.totalScore;
  return this.runningTotal;
};

Player.prototype.rollDice = function() {
  this.currentRoll = Math.floor(Math.random() * 6 + 1);
  console.log("The current roll:", this.currentRoll);
  if (this.currentRoll === 1) {
    console.log("You rolled a 1!")
    this.runningTotal = 0;
    console.log("Running total is", this.runningTotal)
    currentPlayer = switchPlayer(currentPlayer);
    console.log("The current player is: ", currentPlayer);
    return this.currentRoll;
  }
  else {
    this.addRunningTotal();
    return this.currentRoll;
  };
};




$(document).ready (function() {
  let playerOne = new Player("player 1");
  let playerTwo = new Player("player 2");
  $("button#roll").click (function() {
    if (currentPlayer === "playerOne") {
    console.log("Player One's Turn!");
    playerOne.rollDice();
    const roll = playerOne.currentRoll;
    
    if (roll === 1) {
      $("#player-turn1").show();
      $("#dice1").show();
      $("#dice2").hide();
      $("#dice3").hide(); 
      $("#dice4").hide(); 
      $("#dice5").hide();
      $("#dice6").hide();
    }
    else if (roll === 2) {
      $("#dice2").show();
      $("#dice1").hide();
      $("#dice3").hide();
      $("#dice4").hide();
      $("#dice5").hide();
      $("#dice6").hide();
    }
    else if (roll === 3) {
      $("#dice3").show();
      $("#dice1").hide();
      $("#dice2").hide();
      $("#dice4").hide();
      $("#dice5").hide();
      $("#dice6").hide();
    }
    else if (roll === 4) {
      $("#dice4").show();
      $("#dice1").hide();
      $("#dice2").hide();
      $("#dice3").hide();
      $("#dice5").hide();
      $("#dice6").hide();
    }
    else if (roll ===5) {
      $("#dice5").show();
      $("#dice1").hide();
      $("#dice2").hide();
      $("#dice3").hide();
      $("#dice4").hide();
      $("#dice6").hide();
    }
    else {
      $("#dice6").show();
      $("#dice1").hide();
      $("#dice2").hide();
      $("#dice3").hide(); 
      $("#dice4").hide(); 
      $("#dice5").hide();
    }
    $("#player-turn2").hide();
    $("#running-score1").html(playerOne.runningTotal);
    $("#running-score1").show(playerOne.runningTotal);
    
    } 
    else {
    console.log("Player Two's Turn!");
    playerTwo.rollDice();
    const roll = playerTwo.currentRoll;
    if (roll === 1) {
      $("#player-turn2").show();
      $("#dice7").show();
      $("#dice8").hide();
      $("#dice9").hide(); 
      $("#dice10").hide(); 
      $("#dice11").hide();
      $("#dice12").hide();
    }
    else if (roll === 2) {
      $("#dice8").show();
      $("#dice7").hide();
      $("#dice9").hide();
      $("#dice10").hide();
      $("#dice11").hide();
      $("#dice12").hide();
    }
    else if (roll === 3) {
      $("#dice9").show();
      $("#dice7").hide();
      $("#dice8").hide();
      $("#dice10").hide();
      $("#dice11").hide();
      $("#dice12").hide();
    }
    else if (roll === 4) {
      $("#dice10").show();
      $("#dice7").hide();
      $("#dice8").hide();
      $("#dice9").hide();
      $("#dice11").hide();
      $("#dice12").hide();
    }
    else if (roll ===5) {
      $("#dice11").show();
      $("#dice7").hide();
      $("#dice8").hide();
      $("#dice9").hide();
      $("#dice10").hide();
      $("#dice12").hide();
    }
    else {
      $("#dice12").show();
      $("#dice7").hide();
      $("#dice8").hide();
      $("#dice9").hide(); 
      $("#dice10").hide(); 
      $("#dice11").hide();
    }
    $("#player-turn1").hide();
    $("#running-score2").html(playerTwo.runningTotal);
    $("#running-score2").show(playerTwo.runningTotal);
    }
  });
  
  $("button#hold").click (function() {
    if (currentPlayer === "playerOne") {
      playerOne.addTotalScore();
      $("#player-turn1").show();
      console.log("Turn over, player 1. Your score is:", playerOne.totalScore);
      console.log("now it is player 2's turn.")
      $("#total-score1").html(playerOne.totalScore);
      $("#running-score1").hide(playerOne.runningTotal);
      if (playerOne.totalScore >= 100) {
        $("#player1-win").show();
      } 
    }
    else {
      playerTwo.addTotalScore();
      $("#player-turn2").show();
      console.log("Turn over, player 2. Your score is:", playerTwo.totalScore);
      console.log("now it is player 1's turn.")
      $("#total-score2").html(playerTwo.totalScore);
      $("#running-score2").hide(playerTwo.runningTotal);
      if (playerTwo.totalScore >= 100) {
        $("#player2-win").show();
      } 
    }
  })
  $("button#reset").click (function() {
    location.reload();
  });
})