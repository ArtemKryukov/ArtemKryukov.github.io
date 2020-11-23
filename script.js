// 'use stric'

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

// позиция птички

let xPos = 10;
let yPos = 150;
let grav = 2;

function draw(){             // рисуем в canvas
    ctx.drawImage(bg, 0, 0);

    ctx.drawImage(pipeUp , 100, 0);
    ctx.drawImage(pipeBottom , 100, 0 + pipeUp.height + gap);

    // ctx.drawImage(fg, 0, 400);
    ctx.drawImage(bird , xPos, yPos);
    
    yPos += grav;                      // меняем позицию птички
    requestAnimationFrame(draw);

}


pipeBottom.onload = draw;


