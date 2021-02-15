//-- SimpleShapes by Courtney Crother
//-- Sample P5.js Sketch for drawing things!


function setup() {
  createCanvas(700, 700);
  strokeWeight(2);

}

function draw() {

  background(255, 110, 110);


  for (var i = 0; i < width; i = i + 50) { 
    fill (80, 120, 200 );
    ellipse (i, 80, 80, 120);
    }

  fill(200, 40, 40);
  ellipse(width/2, height/2, width/2, height/2);

  fill(20, 200, 40);
  ellipse(300, 300, width/4, height/4 );


  for (var i = 0; i < width; i = i + 100) {
    fill(255, 153, 51);
    rect(i, 500, 20, 150, 80);
    }
 
   fill(30, 60, 80);
   quad(38, 31, 86, 20, 69, 63, 30, 76);

  fill( 20, 90, 70);
  arc (400, 400, 200, 200, 25, 5 );

  fill(255, 255, 102 );
  triangle(600, 400, 675, 400, 630, 250);

  fill(102, 255, 178);
  rect(50, 400, 70, 90);

  fill(102, 255, 178);
  rect(50, 310, 90, 70);

  fill(102, 255, 178);
  rect(50, 200, 70, 90);

  
}