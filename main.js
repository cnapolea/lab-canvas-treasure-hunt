// jshint esversion: 10
// main.js

class Game {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.squareSize = this.canvas.width / 10;
    this.player = new Character(0, 0, this);
    this.treasure = new Treasure(this);
    this.score = 0;
  }

  refresh() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawGrid();
    this.drawPlayer();
    this.drawTreasure();
  }

  restart() {
    this.refresh();
    this.treasure.col = Math.floor(Math.random() * 10) * this.squareSize;
    this.treasure.row = Math.floor(Math.random() * 10) * this.squareSize;
  }

  drawSquare(squareSize) {
    const ctx = this.context;
    ctx.moveTo(0, 0);
    ctx.lineTo(squareSize, 0);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, squareSize);

    ctx.moveTo(0, squareSize);
    ctx.lineTo(squareSize, squareSize);

    ctx.moveTo(squareSize, squareSize);
    ctx.lineTo(squareSize, 0);

    ctx.stroke();
  }

  drawGrid() {
    const ctx = this.context;

    this.context.save();
    this.context.strokeStyle = '#000';

    ctx.beginPath();

    for (let row = 0; row < 11; row++) {
      for (let column = 0; column < 11; column++) {
        this.drawSquare(this.squareSize);
        ctx.translate(this.squareSize, 0);
      }

      ctx.restore();
      ctx.save();

      ctx.translate(0, this.squareSize * row);
    }

    ctx.restore();
  }

  drawPlayer() {
    const ctx = this.context;
    const warriorImage = new Image();
    warriorImage.src = './images/character-down.png';

    warriorImage.addEventListener('load', () => {
      ctx.drawImage(warriorImage, this.player.col, this.player.row);
    });
  }

  drawTreasure() {
    const ctx = this.context;

    const treasureImg = new Image();
    treasureImg.src = 'images/treasure.png';

    treasureImg.addEventListener('load', () => {
      ctx.drawImage(
        treasureImg,
        this.treasure.col,
        this.treasure.row,
        this.squareSize,
        this.squareSize
      );
    });
  }

  isCollision() {
    return this.player.col === this.treasure.col &&
      this.player.row === this.treasure.row
      ? true
      : false;
  }
}

const newGame = new Game();

window.addEventListener('load', () => {
  newGame.refresh();
  addEventListener('keydown', (e) => {
    if (newGame.isCollision()) {
      newGame.restart();
      alert(`I got it!! \n
      Score: ${newGame.score}`);
      newGame.score++;
    } else {
      newGame.refresh();
      switch (e.key) {
        case 'ArrowDown':
          if (newGame.player.row < newGame.height - newGame.squareSize) {
            newGame.player.moveDown();
            break;
          }
          break;
        case 'ArrowUp':
          if (newGame.player.row > 0) {
            newGame.player.moveUp();
            break;
          }
          break;
        case 'ArrowRight':
          if (newGame.player.col < newGame.width - newGame.squareSize) {
            newGame.player.moveRight();
            break;
          }
          break;
        case 'ArrowLeft':
          if (newGame.player.col > 0) {
            newGame.player.moveLeft();
            break;
          }
          break;

        default:
          break;
      }
    }
  });
});
