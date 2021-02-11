var canvas;

var bg1,bg2;
var thief,thiefImg;
var laser1,laser2,laser3,laser4;
var laserImg1,laserImg2,laserImg3,laserImg4;
var key1,key2,keyImg;
var bricks, brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,
     brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick22,brick23,brick24;
var bricksImg,bricksImg2,bricksImg3;
var police1,police2,police3,police4,police5;
var policeImg;
var siron1,sironImg;
var gameState="START";
var sound1;
var gold1,gold2,dold3,gold4,gold5,goldImg;
var Gold=0;
var Key=0;

function preload() {
    bg1=loadImage("sprites/bg2.jpg");
    thiefImg=loadImage("sprites/thief1.png");
    laserImg1=loadImage("sprites/laser 1.png");
    laserImg2=loadImage("sprites/laser 2.png");
    laserImg3=loadImage("sprites/laser 3.png");
    laserImg4=loadImage("sprites/laser 4.png");
    keyImg=loadImage("sprites/key.png");
    bricksImg=loadImage("sprites/bricks.png")
    bricksImg2=loadImage("sprites/bricks2.png")
    bricksImg3=loadImage("sprites/bricks3.png")
    policeImg=loadImage("sprites/police.png")
    sironImg=loadImage("sprites/siron.png")
    sound1 = loadSound("sound/soundwe.mp3")
    goldImg=loadImage("sprites/goldbar.png")
}

function setup(){
    canvas = createCanvas(1150,550);
    
    

    brick5=createSprite(690,520,20,20);
    brick5.shapeColor=("red")
    brick7=createSprite(530,520,20,20);
    brick7.shapeColor=("green")
    brick9=createSprite(500,460,20,20);
    brick9.shapeColor=("red")

    key1=createSprite(410,510,20,20);
    key1.addImage(keyImg)
    key1.scale=0.1;

    key2=createSprite(560,80,20,20);
    key2.addImage(keyImg)
    key2.scale=0.1;

    

    thief=createSprite(1070,480,20,100);
    thief.addImage(thiefImg);
    thief.scale=0.17;
    //thief.debug=true;
    thief.setCollider("rectangle",0,0,300,430);

    police1=createSprite(900,510,20,20);
    police1.addImage(policeImg);
    police1.scale=0.35;
    police1.velocityX=2.5;

    police2=createSprite(770,200,20,20);
    police2.addImage(policeImg);
    police2.scale=0.35;
    police2.velocityY=2.5;

    police3=createSprite(770,510,20,20);
    police3.addImage(policeImg);
    
    police3.scale=0.35;
    police3.visible=false;

    police4=createSprite(580,160,20,20);
    police4.addImage(policeImg);
    police4.scale=0.35;
    police4.velocityY=1.5;

//police4=createSprite(900,500,20,20);
    //police4.addImage(policeImg);
   // police4.scale=0.35;
    //police4.velocityX=2.5;


    
    
    
    bricks=createSprite(980,340,30,440);
    brick2=createSprite(590,5,1200,10);
    brick3=createSprite(890,390,150,30);
    brick4=createSprite(675,390,80,30);
    
    brick6=createSprite(650,465,30,180);
    brick8=createSprite(470,480,30,180);
    brick10=createSprite(350,480,30,180);
    brick11=createSprite(410,405,150,30);
    brick12=createSprite(650,193,30,366);
    brick13=createSprite(980,510,30,50);
    brick13.shapeColor="red";
    brick13.visible=false;
    brick14=createSprite(650,510,30,50);
    brick14.shapeColor="red";
    brick14.visible=false;
    brick15=createSprite(860,355,20,20);
    brick15.shapeColor="red";
    brick16=createSprite(770,390,110,30);
    brick17=createSprite(860,130,30,260);
    brick18=createSprite(470,370,30,50);
    brick19=createSprite(470,120,30,220)
    brick20=createSprite(550,150,190,30)
    brick21=createSprite(510,190,20,20);
    brick21.shapeColor="red";
    brick22=createSprite(350,280,30,300)
    

    gold1=createSprite(1060,150,20,20);
    gold1.addImage(goldImg);
    gold1.scale=0.1;

    gold2=createSprite(700,350,20,20);
    gold2.addImage(goldImg);
    gold2.scale=0.1;

    gold3=createSprite(700,450,20,20);
    gold3.addImage(goldImg);
    gold3.scale=0.1;

    gold4=createSprite(400,460,20,20);
    gold4.addImage(goldImg);
    gold4.scale=0.1;

    gold5=createSprite(520,70,20,20);
    gold5.addImage(goldImg);
    gold5.scale=0.1;
}

function draw(){
    background(bg1)

    textSize (20);
    fill ("white")
    text ("Keys: "+Key,950,30)
    text ("Gold: "+Gold,1050,30)
    edges=createEdgeSprites();

    thief.bounceOff(edges)
    
    police1.bounceOff(bricks)
    police1.bounceOff(brick6)
    police2.bounceOff(brick2)
    police2.bounceOff(brick12)
    police2.bounceOff(brick16)
    police3.bounceOff(brick13)
    police3.bounceOff(brick14)
    police4.bounceOff(edges)
    police4.bounceOff(brick20)
    
    
    if(keyIsDown(UP_ARROW)){
        thief.y=thief.y-8;
      }
      if(keyIsDown(DOWN_ARROW)){
        thief.y=thief.y+8;
      }
      if(keyIsDown(LEFT_ARROW)){
        thief.x=thief.x-8;
      }
      if(keyIsDown(RIGHT_ARROW)){
        thief.x=thief.x+8;
      }
    if(thief.isTouching(brick5)){
        brick6.velocityY=10;
    }
    
    if(thief.isTouching(brick7)){
        brick6=createSprite(650,465,30,180);
        brick7.destroy();
    }
    
    if(thief.isTouching(brick9)){
        brick8.velocityY=10;
        brick9.destroy();
    }
    if(thief.isTouching(brick15)){
      
      brick16.destroy();
  }
  if(thief.isTouching(brick21)){
      
    brick20.destroy();
}
    
    if(key1.isTouching(thief)){
      key1.destroy();
      Key=Key+1;
    }
    if(key2.isTouching(thief)){
      key2.destroy();
      Key=Key+1;
    }

    if(gold1.isTouching(thief)){
      gold1.destroy();
      Gold=Gold+2;
    }
    if(gold2.isTouching(thief)){
      gold2.destroy();
      Gold=Gold+2;
    }
    if(gold3.isTouching(thief)){
      gold3.destroy();
      Gold=Gold+2;
    }
    if(gold4.isTouching(thief)){
      gold4.destroy();
      Gold=Gold+2;
    }
    if(gold5.isTouching(thief)){
      gold5.destroy();
      Gold=Gold+2;
    }

    //if(thief.isTouching(police1)){
    // siron1=createSprite(600,250,20,20);
    // siron1.addImage(sironImg)
    // sound1.play();
    //}
    if(police2.isTouching(edges)){
      police2.destroy();
      police3.visible=true;
      
      brick13.visible=false;
      brick14.visible=false;
      
      police3.velocityY=0;
      police3.velocityX=-2.5;
    }
    
     drawSprites();
}









