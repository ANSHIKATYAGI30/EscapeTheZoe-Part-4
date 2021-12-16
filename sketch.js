var Zoe, alien1, meteors, space, diamond;
var zoeImg, alienImg, meteorImg, spacebg, diamondImg;
var  bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10;
var bar11, bar12, bar13, bar14, bar15, bar16, bar17, bar18, bar19, bar20;
var bar21, bar22, bar23, bar24, bar25, bar26, bar27, bar28, bar29, bar30;
var bar31, bar32, bar33, bar34, bar35, bar36, bar37, bar38, bar39, bar40;
var bar41, bar42, bar43, bar44, bar45, bar46, bar47, bar48, bar49, bar50;
var bar51, bar52, bar53, bar54, bar55, bar56, bar57, bar58, bar59, bar60;
var diamond1, diamond2, diamond3, diamond4, diamond5;
var PLAY= 0;
var END = 1;
var GameStates= PLAY;
var AlienGrp;

function preload(){
  zoeImg= loadImage("Rocket.gif");
  alienImg= loadImage("spaceship.png");
  meteorImg= loadImage("meteors.png");
  spacebg= loadImage("space_Bg.png");
  diamondImg= loadImage("diamonds.png");
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  alien1 = new Aliens(200,400); 

  Zoe= createSprite(windowWidth/4 - 480, windowHeight/2 + 500, 20,20);
  Zoe.addImage(zoeImg);
  Zoe.scale= 0.3;

  bar1= new Rect (300, 900, 20, 60);  
  bar2= new Rect (300, 890, 60, 20);  
  bar3= new Rect (700, 600, 20, 60);  
  bar4= new Rect (700, 590, 60, 20);  
  bar5= new Rect (280, 220, 20, 60);  
  bar6= new Rect (280, 280, 60, 20);  
  bar7= new Rect (440, 200, 20, 60);  
  bar8= new Rect (440, 190, 60, 20);  
  bar9= new Rect (390, 500, 20, 60);  
  bar10= new Rect (390, 500, 20, 60);  
  bar11= new Rect (40, 50, 20, 60);  
  bar12= new Rect (40, 40, 60, 20);  
  bar13= new Rect (800, 100, 20, 60);  
  bar14= new Rect (1800, 800, 60, 20);  
  bar15= new Rect (1800, 800, 20, 60);  
  bar16= new Rect (900, 250, 60, 20); 
  bar17= new Rect (900, 270, 20, 60); 
  bar18= new Rect (500, 400, 60, 20); 
  bar19= new Rect (500, 400, 20, 60); 
  bar20= new Rect (1370, 250, 60, 20); 
  bar21= new Rect (1370, 210, 20, 60); 
  bar22= new Rect (1500, 550, 60, 20); 
  bar23= new Rect (1490, 510, 20, 60); 
  bar24= new Rect (1300, 490, 60, 20); 
  bar25= new Rect (1290, 490, 20, 60); 
  bar26= new Rect (1400, 800, 60, 20); 
  bar27= new Rect (1390, 800, 20, 60); 
  bar28= new Rect (750, 200, 60, 20); 
  bar29= new Rect (750, 200, 20, 60); 
  bar30= new Rect (900, 700, 60, 20); 
  bar31= new Rect (900, 700, 20, 60); 
  bar32= new Rect (1100, 320, 60, 20); 
  bar33= new Rect (1100, 280, 20, 60); 
  bar34= new Rect (1907, 400, 60, 20); 
  bar35= new Rect (1907, 400, 20, 60); 
  bar36= new Rect (840, 1000, 60, 20); 
  bar37= new Rect (840, 1000, 20, 60); 
  bar38= new Rect (1200, 900, 60, 20); 
  bar39= new Rect (1200, 900, 20, 60); 
  bar40= new Rect (777, 300, 60, 20);
  bar41= new Rect (777, 300, 20, 60); 
  bar42= new Rect (1900, 200, 60, 20); 
  bar43= new Rect (1900, 200, 20, 60); 
  bar44= new Rect (1700, 420, 60, 20); 
  bar45= new Rect (1700, 420, 20, 60); 
  bar46= new Rect (900, 900, 60, 20); 
  bar47= new Rect (900, 900, 20, 60); 
  bar48= new Rect (1740, 110, 60, 20); 
  bar49= new Rect (1740, 110, 20, 60); 
  bar50= new Rect (1300, 200, 60, 20); 
  bar51= new Rect (1900, 800, 60, 20);
  bar52= new Rect (1890, 800, 20, 60);
  bar53= new Rect (200, 90, 60, 20);
  bar54= new Rect (1800, 190, 60, 20);
  bar55= new Rect (1500, 990, 60, 20);
  bar56= new Rect (1550, 950, 20, 60);
  bar57= new Rect (1770, 1000, 60, 20);
  bar58= new Rect (1810, 999, 20, 60);
  bar59= new Rect (1900, 999, 60, 20);
  bar60= new Rect (1900, 1000, 20, 60);

  meteors= createSprite( windowWidth/2- 500, windowHeight/2 - 200, 30, 30);
  meteors.addImage(meteorImg);
  meteors.scale= 1.2;

  diamond= createSprite( 1000, 420, 30, 30);
  diamond.addImage(diamondImg);
  diamond.scale= 0.5;

  diamond1= createSprite( 669, 490, 30, 30);
  diamond1.addImage(diamondImg);
  diamond1.scale= 0.5;

  diamond2= createSprite( 760, 777, 30, 30);
  diamond2.addImage(diamondImg);
  diamond2.scale= 0.5;

  diamond3= createSprite( 1068, 815, 30, 30);
  diamond3.addImage(diamondImg);
  diamond3.scale= 0.5;

  diamond4= createSprite( 1367, 390, 30, 30);
  diamond4.addImage(diamondImg);
  diamond4.scale= 0.5;

  AlienGrp = new Group();

  Zoe.debug = true;
  Zoe.setCollider("circle", 30,30, 20);

  AlienGrp.debug = true;
  AlienGrp.setColliderEach("circle", 20,20, 35);
}

function draw (){

background(spacebg)
   
 if (GameStates === PLAY){
    if(keyIsDown(RIGHT_ARROW)){
      Zoe.x= Zoe.x + 5
 }

 if (keyIsDown(LEFT_ARROW)){
   Zoe.x = Zoe.x - 5.5
 }

 if(keyIsDown(UP_ARROW)){
   Zoe.y= Zoe.y - 5
 }

 if(keyIsDown(DOWN_ARROW)){
   Zoe.y = Zoe.y + 5.5
 } 
 
 Alien();

 if (Zoe.isTouching(AlienGrp)){
   GameStates = END;
 }


  }

  

//   for(var i=0; i<200;i++){
// // for(var k=11; k<400; k= k+60){
//     alien= createSprite( i+450 , i*200 , 30, 30);
//     alien.addImage(alienImg);
//     alien.scale= 0.2;
//   //}
//   }


  //Aliens();
  //Diamond();
  alien1.display();
  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();
  bar7.display();
  bar8.display();
  bar9.display();
  bar10.display();
  bar11.display();
  bar12.display();
  bar13.display();
  bar14.display();
  bar15.display();
  bar16.display();
  bar17.display();
  bar18.display();
  bar19.display();
  bar20.display();
  bar21.display();
  bar22.display();
  bar23.display();
  bar24.display();
  bar25.display();
  bar26.display();
  bar27.display();
  bar28.display();
  bar29.display();
  bar30.display();
  bar31.display();
  bar32.display();
  bar33.display();
  bar34.display();
  bar35.display();
  bar36.display();
  bar37.display();
  bar38.display();
  bar39.display();
  bar40.display();
  bar41.display();
  bar42.display();
  bar43.display();
  bar44.display();
  bar45.display();
  bar46.display();
  bar47.display();
  bar48.display();
  bar49.display();
  bar50.display();
  bar51.display();
  bar52.display();
  bar53.display();
  bar54.display();
  bar55.display();
  bar56.display();
  bar57.display();
  bar58.display();
  // bar59.display();
 // bar60.display();
 

  drawSprites();
  
  if (GameStates === END) {
   
    stroke(1);
    fill("Yellow");
     textSize(100);
    text("Game Over !" , 600, 600);
  
  }


}


function Alien(){
  
  if(frameCount % 65 === 0){
    alien= createSprite( 200, 400, 30, 30);
  alien.addImage(alienImg);
  alien.scale= 0.2;
  //alien.velocityX= 2;
  AlienGrp.add(alien);
  alien.y= Math.round(random(300, 1000))
  alien.x= Math.round(random(270, 900))
  alien.lifetime = 900; 
  }

}

// function Diamond(){
//   if(frameCount % 70 === 0){
//     diamond= createSprite( windowWidth - 30, windowHeight/3 - 100, 30, 30);
//     diamond.addImage(diamondImg);
//     diamond.scale= 0.3;
//     //diamond.velocityX = 1.8;
//     diamond.y= Math.round(random(300, 1000))
//     diamond.x= Math.round(random(250, 900))
//     diamond.lifetime = 800;
//   }
// }