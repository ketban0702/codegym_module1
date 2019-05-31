// khai bao 
const GAP = 140;
const BX = 10;
const GRAVITY = 1;
const BIRDY_WIDTH=38;
const BIRDY_HEIGHT=26;
const BG_WIDTH=288;
const BG_HEIGHT=512;
const FG_WIDTH=306;
const FG_HEIGHT=118;
const PIPENORTH_WIDTH=52;
const PIPENORTH_HEIGHT=242;
const PIPESOUTH_WIDTH=52;
const PIPESOUTH_HEIGHT=242;
const CVS_WIDTH=288;
const CVS_HEIGHT=512;

// Khai bao doi tuong
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var fly = new Audio();
var scor = new Audio();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";
fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var bY = 150;
var score = 0;

// Nhan phim
document.addEventListener("keydown",moveUp);
function moveUp(){
    bY -= 25;
    fly.play();
}
// Sap xep ong khoi
var pipe = [];
pipe[0] = {
    x : CVS_WIDTH,
    y : 0
};
// draw images
function draw(){
    ctx.drawImage(bg,0,0,BG_WIDTH,BG_HEIGHT);
    for(var i = 0; i < pipe.length; i++){
        var constant = PIPENORTH_HEIGHT+GAP;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y,PIPENORTH_WIDTH,PIPENORTH_HEIGHT);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant,PIPESOUTH_WIDTH,PIPESOUTH_HEIGHT);
        pipe[i].x--;
        if( pipe[i].x == 125 ){
            pipe.push({
                x : CVS_WIDTH,
                y : Math.floor(Math.random()*PIPENORTH_HEIGHT)-PIPENORTH_HEIGHT
            }); 
        }
        // Xu ly va cham
        if( BX + BIRDY_WIDTH >= pipe[i].x && 
            BX <= pipe[i].x + PIPENORTH_WIDTH && 
            (bY <= pipe[i].y + PIPENORTH_HEIGHT || 
            bY+BIRDY_HEIGHT>= pipe[i].y+constant) || 
            bY + BIRDY_HEIGHT >=  CVS_HEIGHT - FG_HEIGHT){
                alert("Game Over");
            location.reload(); 
        }
        if(pipe[i].x == 5){
            score++;
            scor.play();
        }
    }
    ctx.drawImage(fg,0,CVS_HEIGHT - FG_HEIGHT,FG_WIDTH,FG_HEIGHT);
    ctx.drawImage(bird,BX,bY,BIRDY_WIDTH,BIRDY_HEIGHT);
    bY += GRAVITY;
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,CVS_HEIGHT-20);
    requestAnimationFrame(draw);
}
draw();

























