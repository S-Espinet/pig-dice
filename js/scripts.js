function Player (roll) {
  this.roll = roll;
}

Player.prototype.rollDice = function() {
  this.roll = Math.floor(Math.random() * 6 + 1);
  return this.roll;
};