var bg,bgImg;
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;

function preload() {
    //load the images here

    bgImg=loadImage("garden.png");
    catImg=loadImage("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadImage("cat4.png");
    mouseImg=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png")
    mouseImg3=loadImage("mouse4.png");

}

function setup(){
   createCanvas(1000,800);
    //create tom and jerry sprites here

   bg=createSprite(500,375,30,30);
   bg.addImage("background",bgImg);
   bg.scale=1.1;
   cat=createSprite(800,600,70,70);
   cat.addImage("runningcat",catImg);
   cat.scale=0.2;
   mouse=createSprite(200,600,70,70);
   mouse.addImage("mouse",mouseImg);
   mouse.scale=0.2;

}

function draw() {
   background(255);
   //Write condition here to evalute if tom and jerry collide
   
   text( mouseX + ',' + mouseY , 10 , 45);

   if(cat.x - mouse.x < (cat.width-mouse.width)/2)
   {   
      cat.velocityX=0;
      cat.addImage("catLast",catImg3);
      cat.changeImage("catLast");
      mouse.addImage("mouseLast",mouseImg3);
      mouse.changeImage("mouseLast");
      cat.x=300;

   }
     
    keyPressed();
    drawSprites();

}

function keyPressed(){

//For moving and changing animation write code here

if(keyCode === LEFT_ARROW)   
   {  
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouse",mouseImg2);
      mouse.changeAnimation("mouse"); 
   }    
}
