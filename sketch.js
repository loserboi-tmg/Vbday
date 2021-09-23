var START = 1
var PLAY = 2;
var END = 0;
var gameState = START;


var song;

var play,gameOver, restart,start;


function preload(){

  startImg = loadImage("P1.png")
 
  boxImg = loadAnimation("box.png");


  playImg = loadImage("play.png");
  

  heart1Img = loadAnimation("h1.png");
  heart2Img = loadAnimation("h2.png");

  candleImg = loadAnimation("candles.png");
  
  cakeImg = loadAnimation("cake.png");

  song = loadSound("bday.mp3");

  noteImg= loadImage("bdayNote.jpg");

}

function setup() {
  createCanvas(1200,1000);

  play = createSprite(950, 300 + 250)
  play.addImage(playImg);
  

  start = createSprite(550,300,50,50);
  start.addImage(startImg);
  start.scale= 0.55;
  
  h1= createSprite(150,150,50,50)
  h1.addAnimation("gift",boxImg);
  h1.addAnimation("h1",heart1Img);
  h1.visible=false;

  h2= createSprite(800,150,50,50)
  h2.addAnimation("gift",boxImg);
  h2.addAnimation("h2",heart2Img);
  h2.visible=false;
  
  candle= createSprite(500,400,50,50)
  candle.addAnimation("gift",boxImg);
  candle.addAnimation("candles",candleImg);
  candle.visible=false;

  cake= createSprite(500,550,50,50)
  cake.addAnimation("gift",boxImg);
  cake.addAnimation("bcake",cakeImg);
  cake.scale=1.5;
  cake.visible=false;

  note = createSprite(950,500,50,50);
  note.addImage(noteImg);
  note.scale=1.5;
  note.visible=false;
}

function draw() {
  background("grey");
  
  if(gameState===START){
   
  
    if(mousePressedOver(play)){
      start.visible= false;
      play.visible=false;
      gameState = PLAY;
    }
  }

  if (gameState===PLAY){
    h1.visible=true;
    if(mousePressedOver(h1)){
      h1.changeAnimation("h1", heart1Img);
    }

    h2.visible=true;
    if(mousePressedOver(h2)){
      h2.changeAnimation("h2", heart2Img);
    }

  candle.visible=true;
    if(mousePressedOver(candle)){
      candle.changeAnimation("candles", candleImg);
    }

    cake.visible=true;
    if(mousePressedOver(cake)){
      cake.changeAnimation("bcake", cakeImg);
      song.play();
      note.visible=true;

    }


   
    

  }
  
  
  drawSprites();
}



