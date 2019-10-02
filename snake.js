const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;
const ground = new Image();
ground.src = "img/ground.png";
const foodImg = new Image();
foodImg.src = "img/food.png";

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+1) * box
}

let score = 0;

document.addEventListener("keydown",direction);

let d;

function direction(event) {
    if(event.keyCode == 37 && d != "RIGHT"){
        d = "LEFT";
    } else if (event.keyCode == 38 && d != "DOWN"){
        d = "UP";
    } else if (event.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
    } else if (event.keyCode == 40 && d != "UP"){
        d = "DOWN";
    }   
}

function collision(head,array){
    for( let i = 0; i<snake.length; i++){
        if( head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

function draw() {
    ctx.drawImage(ground,0,0);

    for( let i = 0; i<snake.length; i++){
        ctx.fillStyle = (i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.drawImage(foodImg, food.x, food.y);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;

    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+1) * box
        }
    }else{
        snake.pop();
    }

    let newHead = {
        x : snakeX,
        y : snakeY
    }

    if(snakeX < box || snakeX > 17 * box || snakeY < box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
    }

    snake.unshift(newHead);

    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,box,box);
}

let game = setInterval(draw,150);