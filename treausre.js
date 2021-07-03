// jshint esversion: 10
class Treasure {
  constructor(game) {
    this.game = game;
    this.col = Math.floor(Math.random() * 10) * this.game.squareSize;
    this.row = Math.floor(Math.random() * 10) * this.game.squareSize;
  }

  get position() {
    return [this.col, this.row];
  }
}
