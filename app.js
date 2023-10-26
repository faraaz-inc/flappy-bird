//Element selectors
const bird = document.querySelector('.bird');
const gameDisplay = document.querySelector('.game-container');
const ground = document.querySelector('.ground');
const sky = document.querySelector('.sky');

let isGameOver = false;

//Bird position
const birdleft = 200;
let birdBottom = 150;
let gravity = 2;

//Timers
let gameTimerId;
let moveTimer;
let obstacleTimer;

//Start the Game
function startGame() {
    gameTimerId = setInterval(drop, 20);
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdleft + 'px';

    document.addEventListener('keydown', control);

    generateObstacles();
    //Run generate obstacles in every 3 to 3,5 seconds
    obstacleTimer = setTimeout(generateObstacles, Math.random() * 3500 + 3000);
}

//Game Over
function gameOver() {
    clearInterval(gameTimerId);
    clearInterval(moveTimer);
    clearTimeout(obstacleTimer);
    isGameOver = true;
    document.removeEventListener('keydown', control);
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
//Drop the bird
function drop() {
    if(birdBottom > 0) {
        birdBottom -= gravity;
    }
    bird.style.bottom = birdBottom + 'px';

    if(birdBottom === 0)
        gameOver();
}


//Create Obstacles
function generateObstacles() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 100;
    let obstacleBottom = randomHeight;
    
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.bottom = obstacleBottom + 'px';
    obstacle.style.left = obstacleLeft + 'px';

    gameDisplay.appendChild(obstacle);

    //Move the obstacle
    function move() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + 'px';
        if(obstacleLeft === -60) {
            clearInterval(timerId);
            gameDisplay.removeChild(obstacle);
        }
    }

    moveTimer = setInterval(move, 30);
}


startGame();