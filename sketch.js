

var car , car_moving , car_broken
var obstaclesGroup , obstacle1 , obstacle2, obstacle3
var ground , invisibleground , groundImage
var gameOver, restart
var score = 0
var backgroundImg

var gameState = "PLAY";
function preload(){
    backgroundImg = loadImage("background.png")
    
    car_moving = loadAnimation("car.png")
car_broken = loadAnimation("broken car.png")

groundImage = loadImage("road.png")

obstacle1 = loadImage("obstacle 1.png")
obstacle2 = loadImage("obstacle 2.png")
obstacle3 = loadImage("obstacle3.png")

gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
 
    createCanvas(windowWidth, windowHeight);
  
    car = createSprite(50,height-70,20,50);
    car.addAnimation("moving" , car_moving)
    car.addAnimation("broken" , car_broken)
    car.setCollider('circle',0,0,350)
    car.scale = 0.5
    invisibleGround = createSprite(width/2,height-10,width,125);  
  invisibleGround.shapeColor = "#f4cbaa";
  
  ground = createSprite(width/2,height,width,2);
  ground.addImage("ground",groundImage);
  ground.x = width/2
  ground.velocityX = -(6 + 4*score/150);

  gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);

  restart = createSprite(width/2,height/2);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.1;


  gameOver.visible = false;
  restart.visible = false;

  obstaclesGroup = new Group()

score = 0









}

function draw() {
 
}
