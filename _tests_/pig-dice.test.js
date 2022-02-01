import Player from './../src/pigDice.js';

describe ('Player', () => {

  test('should create a player object with current roll, running total, total score, and name,', () => {
    const playerOne = new Player("playerOne");
    expect(playerOne).toEqual(0, 0, 0, 'playerOne');
  });
});