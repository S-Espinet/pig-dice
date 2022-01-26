function Player () {
  this.currentRoll = 0;
  this.runningTotal = 0;
  this.totalScore = 0;
}

Player.prototype.rollDice = function() {
  this.currentRoll = Math.floor(Math.random() * 6 + 1);
  return this.currentRoll;
};

Player.prototype.addRunningTotal = function() {
  this.runningTotal += this.currentRoll;
  return this.runningTotal;
};

Player.prototype.addTotalScore = function() {
  this.totalScore += this.runningTotal;
  return this.totalScore;
};