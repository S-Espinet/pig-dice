import Player from './../src/pigDice.js';

describe ('Player', () => {

  test('should create a player object with current roll, running total, total score, and name,', () => {
    const playerOne = new Player("playerOne");
    expect(playerOne).toEqual({"currentRoll": 0, "name": "playerOne", "runningTotal": 0, "totalScore": 0});
  });
  test("it should return a random number of 1 - 6 on the current roll", () => {
    const playerOne = new Player("playerOne");
    playerOne.rollDice();
    expect(playerOne.currentRoll).toBeLessThanOrEqual(6);
    expect(playerOne.currentRoll).toBeGreaterThan(0);
  });
});