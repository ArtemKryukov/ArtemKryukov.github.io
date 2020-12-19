"use strict"

let cvs = document.querySelector('#canvas');
let ctx = cvs.getContext('2d');



const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';


// при нажатии на кнопку
document.addEventListener('keydown' , moveUp);
function moveUp(){
    yPos -=30;    
}

// создание блоков
let pipe = [];

pipe[0] = {
    x : cvs.width ,
    y : 0
}

// позиция птички

let xPos = 10;
let yPos = 150;

const grav = 1.2;
const gap = 120;                // отступы между блоков
let score = 0;

function start (callback) {
    alert('Нажиймай на пробел и пролетай между блоков');
    callback();
}


function draw(){   
    // рисуем в canvas
    ctx.drawImage(bg, 0, 0);
        // создание блоков
    for (let i = 0; i< pipe.length ; i++ ) {
        
        ctx.drawImage(pipeUp , pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom , pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;
        
        if (pipe[i].x == 93) {
            pipe.push({
                x : cvs.width ,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

    // столконвения птички
        if((xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height)){
                location.reload();
                return alert('Game over! Вы набрали ' + score + ' очков. Нажмите Ок что-бы попробовать еще раз.' );
                
        }

        if(pipe[i].x == 5){
            score++;
        }
    }

    ctx.drawImage(fg, 0, 400);
    ctx.drawImage(bird , xPos, yPos);
    
    yPos += grav;                      // меняем позицию птички

    // score
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);

    requestAnimationFrame(draw);
}
start(draw);





