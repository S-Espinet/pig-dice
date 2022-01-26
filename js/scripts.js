function Player () {
  this.currentRoll = 0;
  this.runningTotal = 0;
  this.totalScore = 0;
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
};


Player.prototype.rollDice = function() {
  this.currentRoll = Math.floor(Math.random() * 6 + 1);
  console.log("The current roll:", this.currentRoll);
  if (this.currentRoll === 1) {
      console.log("You rolled a 1!")
      this.runningTotal = 0;
      currentPlayer = switchPlayer(currentPlayer);
      console.log("The current player is: ", currentPlayer);
  }
  else {
    return this.currentRoll;
  };
};

Player.prototype.addRunningTotal = function() {
  this.runningTotal += this.currentRoll;
  return this.runningTotal;
};

Player.prototype.addTotalScore = function() {
  this.totalScore += this.runningTotal;
  return this.totalScore;
};