// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const squareSize = width / 10;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.save();

  context.beginPath();
  context.strokeStyle = '#000';

  function drawSquare(sideSize) {
    context.moveTo(0, 0);
    context.lineTo(sideSize, 0);

    context.moveTo(0, 0);
    context.lineTo(0, sideSize);

    context.moveTo(0, sideSize);
    context.lineTo(sideSize, sideSize);

    context.moveTo(sideSize, sideSize);
    context.lineTo(sideSize, 0);

    context.stroke();

    context.translate(sideSize, 0);
  }

  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      drawSquare(squareSize);
    }
    context.restore();
    context.save();
    context.translate(0, squareSize * row);
  }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
