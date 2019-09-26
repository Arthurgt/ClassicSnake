const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;
const ground = new Image();
ground.src = "img/ground.png";
const food = new Image();
food.src = "img/food.png";

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box

}

let score = 0;