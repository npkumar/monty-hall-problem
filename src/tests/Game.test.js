import Game from "../../server/Game";

describe("Game", () => {
  it("should start a new monty hall game correctly", () => {
    const game = new Game();
    expect(game.doors.length).toEqual(3);
    expect(game.playerChosenIndex).toEqual(0);
    expect(game.hostChosenIndex).toEqual(0);
  });

  it("should not choose CAR by host", () => {
    const game = new Game();
    game.playerChooseDoor();
    game.hostChooseDoor();
    expect(game.doors[game.hostChosenIndex]).not.toEqual(game.CAR);
  });

  it("should not match playerChosenIndex and hostChosenIndex without changing doors", () => {
    const game = new Game();
    game.playerChooseDoor();
    game.hostChooseDoor();
    expect(game.playerChosenIndex).not.toEqual(game.hostChosenIndex);
  });

  it("should not match playerChosenIndex and hostChosenIndex after changing doors", () => {
    const game = new Game();
    game.playerChooseDoor();
    game.hostChooseDoor();
    game.playerChooseAnotherDoor();
    expect(game.playerChosenIndex).not.toEqual(game.hostChosenIndex);
  });

  it("should win or lose game depending on player choice", () => {
    const game = new Game();
    game.playerChooseDoor();
    if (game.doors[game.playerChosenIndex] === game.CAR) {
      expect(game.hasPlayerWon()).toEqual(true);
    } else {
      expect(game.hasPlayerWon()).toEqual(false);
    }
  });
});
