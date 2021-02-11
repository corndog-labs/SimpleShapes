//-- SimpleShapes by Courtney Crother
//-- Sample P5.js Sketch for drawing things!


function setup() {
  createCanvas(700, 700);
  strokeWeight(1);

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
   fill(200, 90, 20);
   rect(i, 500, 20, 150, 80);
   }
fill (30,60,80);
   quad(38, 31, 86, 20, 69, 63, 30, 76);
  
}