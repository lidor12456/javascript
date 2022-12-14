let lastRenderTime = 0;
import { update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
const gameBoard = document.querySelector('#game-board');

function main (currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1/snakeSpeed)  return

    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
}
function draw() {
    gameBoard.innerHTML ='';
drawSnake(gameBoard);
drawFood(gameBoard);
}

