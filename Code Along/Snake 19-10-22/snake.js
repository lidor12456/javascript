import { getInputDirection } from "./input.js";

export const snakeSpeed = 5;
let newSegmant = 0;
const snakeBody = [{x:10, y:11},{x:11, y:11},{x:12, y:11},{x:13, y:11},{x:14, y:11},{x:15, y:11} ];

export function update() {
    addSegmant();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i>=0 ; i --) {
        snakeBody[i+1] = {...snakeBody[i]}

    }
    snakeBody[0].x +=  inputDirection.x;
    snakeBody[0].y +=  inputDirection.y;

}

export function draw(gameBoard) {
    snakeBody.forEach(e => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })


}

export function expandSnake(amount) {
    newSegmant += amount;
}
export function onSnake(position) {
    return snakeBody.some(segmant => {
        return equalPosition (segmant,position)
    })
}

function equalPosition (position1, position2) {
    return position1.x === position2.x && position1.y === position2.y;

}

function addSegmant () {
    for (let i = 0; i < newSegmant; i++) {
      snakeBody.push({...snakeBody[snakeBody.length -1]})
        
    }
    newSegmant = 0;
}