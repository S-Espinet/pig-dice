function Player () {
  this.currentRoll = 0;
  this.runningTotal = 0
}

Player.prototype.rollDice = function() {
  this.currentRoll = Math.floor(Math.random() * 6 + 1);
  return this.currentRoll;
};

Player.prototype.add = function() {
  this.runningTotal += this.currentRoll;
}