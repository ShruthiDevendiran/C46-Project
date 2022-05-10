const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, right, left, up;
var gh, pacMan, maze, mmg;

function preload(){
 //gh = loadAnimation("./assets/Pacman.png","./assets/Pacman2.png");
 gh = loadImage("./assets/Pacman1.png");
 mmg = loadImage("./assets/maze.png");

}


function setup() {
  createCanvas(700,700)
  engine = Engine.create();
  world = engine.world;
 
  ground = createSprite(350,690,700,10);
  ground.shapeColor = "blue";
  
  right = createSprite(690,350,10,700);
  right.shapeColor = "blue";

  left = createSprite(10,350,10,700);
  left.shapeColor = "blue";

  up = createSprite(350,10,700,10);
  up.shapeColor = "blue";
  
  pacMan = createSprite(30,30,30,30);
  pacMan.addImage("Ghost Hunter", gh);
  pacMan.scale = 0.05;

  v_wallsGroup = new Group();
  h_wallsGroup = new Group();

 /* maze = createSprite(350,350,700,700);
  maze.addImage("maze",mmg);
  maze.scale = 1.5;*/

  verticalWalls();

  horizontalWalls()
  
}

function draw() 
{
  background("black");
  Engine.update(engine);

  if(keyIsDown(LEFT_ARROW)){
   // console.log("I am inside if")
    pacMan.x -= 3;
  }

  if(keyIsDown(RIGHT_ARROW)){
    pacMan.x += 3;
  }

  if(keyIsDown(UP_ARROW)){
    pacMan.y -= 3;
  }

  if(keyIsDown(DOWN_ARROW)){
    pacMan.y += 3;
  }

  if(pacMan.collide(v_wallsGroup)){
    pacMan.x = 30;
    pacMan.y = 30;
  }
  
  drawSprites()
}


function verticalWalls(){
  w1 = createSprite(325,20,6,80);
  w1.shapeColor = "red";
  v_wallsGroup.add(w1);

  w2 = createSprite(535,20,6,300);
  w2.shapeColor = "red";
  v_wallsGroup.add(w2);

  w3 = createSprite(270,190,6,270);
  w3.shapeColor = "red";
  v_wallsGroup.add(w3);

  w4 = createSprite(110,110,6,110);
  w4.shapeColor = "red";
  v_wallsGroup.add(w4);
  
  w5 = createSprite(642,140,6,165);
  w5.shapeColor = "blue";

  w6 = createSprite(218,85,6,60);
  w6.shapeColor = "blue";

  w7 = createSprite(430,85,6,55);
  w7.shapeColor = "blue";

  w8 = createSprite(165,135,6,55);
  w8.shapeColor = "blue";

  w9 = createSprite(325,165,6,115);
  w9.shapeColor = "blue";

  w10 = createSprite(59,219,6,110);
  w10.shapeColor = "blue";

  w11 = createSprite(218,219,6,100);
  w11.shapeColor = "blue";

  w12 = createSprite(484,270,6,220);
  w12.shapeColor = "blue";

  w13 = createSprite(429,270,6,220);
  w13.shapeColor = "blue";

  w14 = createSprite(376,320,6,220);
  w14.shapeColor = "blue";

  w15 = createSprite(57,430,6,215);
  w15.shapeColor = "blue";

  w16 = createSprite(165,350,6,165);
  w16.shapeColor = "blue";

  w17 = createSprite(112,295,6,60);
  w17.shapeColor = "blue";

  w18 = createSprite(643,510,6,270);
  w18.shapeColor = "blue";

  w19 = createSprite(270,560,6,160);
  w19.shapeColor = "blue";

  w20 = createSprite(377,560,6,160);
  w20.shapeColor = "blue";

  w21 = createSprite(325,430,6,110);
  w21.shapeColor = "blue";

  w22 = createSprite(536,400,6,50);
  w22.shapeColor = "blue";
  
  w23 = createSprite(430,460,6,60);
  w23.shapeColor = "blue";

  w24 = createSprite(217,460,6,55);
  w24.shapeColor = "blue";

  w25 = createSprite(590,455,6,60);
  w25.shapeColor = "blue";

  w26 = createSprite(430,680,6,80);
  w26.shapeColor = "blue";

  w27 = createSprite(483,535,6,110);
  w27.shapeColor = "blue";

  w28 = createSprite(589,560,6,55);
  w28.shapeColor = "blue";

  w30 = createSprite(483,670,6,60);
  w30.shapeColor = "blue";

  w31 = createSprite(110,560,6,50);
  w31.shapeColor = "blue";

  w32 = createSprite(535,510,6,55);
  w32.shapeColor = "blue";

  w33 = createSprite(535,615,6,60);
  w33.shapeColor = "blue";

  w34 = createSprite(535,298,6,60);
  w34.shapeColor = "blue";
  
  w35 = createSprite(589,350,6,55);
  w35.shapeColor = "blue";

  w36 = createSprite(590,240,6,55);
  w36.shapeColor = "blue";

  w37 = createSprite(643,298,6,58);
  w37.shapeColor = "blue";
  
}


function horizontalWalls(){
  w38 = createSprite(80,60,55,6);
  w38.shapeColor = "blue";

  w39 = createSprite(10,110,100,6);
  w39.shapeColor = "blue";

  w40 = createSprite(10,270,100,6);
  w40.shapeColor = "blue";

  w41 = createSprite(10,535,100,6);
  w41.shapeColor = "blue";

  w42 = createSprite(218,641,325,6);
  w42.shapeColor = "blue";

  w43 = createSprite(590,641,110,6);
  w43.shapeColor = "blue";

  w44 = createSprite(215,60,110,6);
  w44.shapeColor = "blue";

  w45 = createSprite(350,60,60,6);
  w45.shapeColor = "blue";

  w47 = createSprite(460,60,55,6);
  w47.shapeColor = "blue";

  w48 = createSprite(615,60,55,6);
  w48.shapeColor = "blue";

  w49 = createSprite(456,112,272,6);
  w49.shapeColor = "blue";

  w50 = createSprite(130,588,180,6);
  w50.shapeColor = "blue";

  w51 = createSprite(190,430,265,6);
  w51.shapeColor = "blue";

  w52 = createSprite(455,430,165,6);
  w52.shapeColor = "blue";

  w53 = createSprite(217,535,220,6);
  w53.shapeColor = "blue";

  w54 = createSprite(430,535,100,6);
  w54.shapeColor = "blue";

  w55 = createSprite(510,588,165,6);
  w55.shapeColor = "blue";

  w56 = createSprite(215,324,105,6);
  w56.shapeColor = "blue";

  w57 = createSprite(350,323,60,6);
  w57.shapeColor = "blue";

  w58 = createSprite(350,270,60,6);
  w58.shapeColor = "blue";

  w59 = createSprite(165,165,110,6);
  w59.shapeColor = "blue";

  w60 = createSprite(430,165,110,6);
  w60.shapeColor = "blue";

  w61 = createSprite(616,165,58,6);
  w61.shapeColor = "blue";

  w62 = createSprite(112,218,115,6);
  w62.shapeColor = "blue";

  w63 = createSprite(540,218,105,6);
  w63.shapeColor = "blue";

  w64 = createSprite(690,218,100,6);
  w64.shapeColor = "blue";

  w65 = createSprite(139,376,60,6);
  w65.shapeColor = "blue";

  w66 = createSprite(191,270,55,6);
  w66.shapeColor = "blue";

  w67 = createSprite(85,323,55,6);
  w67.shapeColor = "blue";

  w68 = createSprite(270,376,110,6);
  w68.shapeColor = "blue";

  w69 = createSprite(160,483,107,6);
  w69.shapeColor = "blue";

  w70 = createSprite(350,483,50,6);
  w70.shapeColor = "blue";

  w71 = createSprite(538,483,110,6);
  w71.shapeColor = "blue";

  w72 = createSprite(350,588,60,6);
  w72.shapeColor = "blue";

  w73 = createSprite(510,376,50,6);
  w73.shapeColor = "blue";

  w74 = createSprite(615,376,60,6);
  w74.shapeColor = "blue";

  w75 = createSprite(560,323,60,6);
  w75.shapeColor = "blue";

  w76 = createSprite(615,270,55,6);
  w76.shapeColor = "blue";

  w77 = createSprite(680,323,70,6);
  w77.shapeColor = "blue";

}