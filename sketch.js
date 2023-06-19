var sonic
var sonicImG
var shadow
var shadowImg
var ghz
var ghzImg
var path


function preload(){
    sonicImg= loadAnimation("Sonic X Running.png");
    shadowImg= loadAnimation("Shadow (Sonic X).png");
    ghzImg = loadAnimation("Green Hill Background Zone.png");

}

function setup() {

    createCanvas(1200,300);
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

sonic = createSprite(70,150);
sonic.addAnimation("Sonic X Running",sonicImg);
sonic.scale=0.07;

gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
 
}

function draw() {

    background(0);
  
    drawSprites();
    textSize(20);
    fill(255);
    text("Distance: "+ distance,900,30);

    distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   sonic.y = World.mouseY;
  
   edges= createEdgeSprites();
   sonic .collide(edges);

   if(path.x < 0 ){
    path.x = width/2;
   }

}
