"use strict"

let cvs = document.querySelector('#canvas');
let ctx = cvs.getContext('2d');



let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';



let gap = 90;                // отступы между блоков


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
let grav = 1;

function draw(){             // рисуем в canvas
    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i< pipe.length ; i++ ) {
        ctx.drawImage(pipeUp , pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom , pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;
        
        if (pipe[i].x == 125) {
            pipe.push({
                x : cvs.width ,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
    }
    

    ctx.drawImage(fg, 0, 400);
    ctx.drawImage(bird , xPos, yPos);
    
    yPos += grav;                      // меняем позицию птички
    requestAnimationFrame(draw);

}
pipeBottom.onload = draw;





