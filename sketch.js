var PLAY = 1;
var END = 0;
var gameState = 1;

var sword;
var fruit1,fruit2,fruit3,fruit4;
var monsterImage,monsterImage2;
function preload(){
  
  swordImage = loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  monsterImage=loadImage("alien1.png");
  monsterImage2=loadImage("alien2.png");
  gameOverImage=loadImage("gameover.png");

}


function setup() {
  createCanvas(400, 400);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  //sword.setCollider("circle",0,0,40,40)
  
  score = 0;
  fruitGroup= new Group();
  enemyGroup =new Group();

}

function draw() {
  background("lightBlue");
  
  
  
  if(gameState===PLAY){
    
  fruits();
  enemy();
  
    
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    
  }
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2
    }
  
    
   if(enemyGroup.isTouching(sword)){
    gameState===END
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityEach(0);
    enemyGroup.setVelocityEach(0);
     
    
    
    sword.addImage(gameOverImage);
    sword.x=200;
    sword.y=200;
    
  }
    
    console.log("this is ")
    
  drawSprites();
  
  text("Score :" + score,300,30)
}


function fruits(){
  if(World.frameCount%80===0){
    var fruit=createSprite(400,200,20,20);
    fruit.scale=0.35;
   // fruit.debug=true;
    r = Math.round(random(1,4));
    if(r==1){
    fruit.addImage(fruit1)
    } else if (r==2){
     fruit.addImage(fruit2)
    }else if (r==3){
     fruit.addImage(fruit3)
    }else{
     fruit.addImage(fruit4)
    }

  //  fruit.addImage("fruit"+r);
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
       
    
  }
}

function enemy(){
  if(World.frameCount%200===0){
    var monster=createSprite(400,200,20,20);
    monster.addImage("moving" , monsterImage,monsterImage2);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
       
   }
}


