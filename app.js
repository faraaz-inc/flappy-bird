//Element selectors
const bird = document.querySelector('.bird');
const gameDisplay = document.querySelector('.game-container');
const ground = document.querySelector('.ground');
const sky = document.querySelector('.sky');

//Bird position
const birdleft = 200;
let birdBottom = 150;
let gravity = 2;

//Start the Game
function startGame() {
    const timerId = setInterval(drop, 20);
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdleft + 'px';

    document.addEventListener('keydown', control);
}

//Keyboard Control
function control(e) {
    if(e.keyCode === 32)
        jump();
}
//Jump
function jump() {
    if(birdBottom < 500)
        birdBottom += 50;

    bird.style.bottom = birdBottom + 'px';
    console.log(birdBottom);
}
//Gravity
function drop() {
    if(birdBottom > 0) {
        birdBottom -= gravity;
    }
    bird.style.bottom = birdBottom + 'px';

}

//Create Obstacles
function generateObstacles() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
}

startGame();