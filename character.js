// jshint esversion: 10
class Character {
  constructor(col, row, game) {
    this.col = col;
    this.row = row;
    this.game = game;
  }

  moveUp() {
    this.row -= this.game.squareSize;
  }
  moveDown() {
    this.row += this.game.squareSize;
  }
  moveRight() {
    this.col += this.game.squareSize;
  }
  moveLeft() {
    this.col -= this.game.squareSize;
  }

  paint() {
    this.game.drawPlayer(this);
  }

  get position() {
    return [this.col, this.row];
  }
}
