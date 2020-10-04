class Game {
  CAR = "CAR";
  GOAT = "GOAT";

  constructor() {
    this.playerChosenIndex = 0;
    this.hostChosenIndex = 0;
    this.doors = this._generateOptions();
  }

  _generateOptions() {
    const doors = new Array(3).fill(this.GOAT);
    const carIndex = Math.floor(Math.random() * 3);
    doors[carIndex] = this.CAR;
    return doors;
  }

  playerChooseDoor() {
    this.playerChosenIndex = Math.floor(Math.random() * 3);
  }

  hostChooseDoor() {
    for (let i = 0; i < this.doors.length; i++) {
      if (i !== this.playerChosenIndex && this.doors[i] !== this.CAR) {
        this.hostChosenIndex = i;
        break;
      }
    }
  }

  playerChooseAnotherDoor() {
    for (let i = 0; i < this.doors.length; i++) {
      if (i !== this.playerChosenIndex && i !== this.hostChosenIndex) {
        this.playerChosenIndex = i;
        break;
      }
    }
  }

  hasPlayerWon() {
    return this.doors[this.playerChosenIndex] === this.CAR;
  }
}

export default Game;
