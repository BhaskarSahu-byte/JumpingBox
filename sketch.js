var canvas, musicSound;
var box;
var surface1, surface2, surface3, surface4;

function preload() {
  musicSound = loadSound("music.mp3");
}


function setup(){
  canvas = createCanvas(800,400);

  //create 4 different surfaces
  surface1 = createSprite(100, 300, 200, 75);
  surface1.shapeColor = "green";
  surface1.debug = true;

  surface2 = createSprite(300, 300, 200, 75);
  surface2.shapeColor = "red";
  surface2.debug = true;

  surface3 = createSprite(500, 300, 200, 75);
  surface3.shapeColor = "orange";
  surface3.debug = true;

  surface4 = createSprite(700, 300, 200, 75);
  surface4.shapeColor = "blue";
  surface4.debug = true;

  //create box sprite and give velocity
  box = createSprite(50,238, 50,50);
  box.velocityX = +2.5;
  box.shapeColor = "white";
  box.debug = true;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if (isTouching(box, surface1)) {
      box.shapeColor = "green";
    }
    else {
      surface1.shapeColor = "green";
    }

    if (isTouching(box, surface2)) {
      box.shapeColor = "red";
    }
    else {
      surface2.shapeColor = "red";
    }

    if (isTouching(box, surface3)) {
      box.shapeColor = "orange";
    }
    else {
      surface3.shapeColor = "orange";
    }

    if (isTouching(box, surface4)) {
      box.shapeColor = "blue";
      box.velocityX = 0;
      musicSound.play();
    }
    else {
      surface4.shapeColor = "blue";
    }

    drawSprites();
}
