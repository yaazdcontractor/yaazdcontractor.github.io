let yoff = 0.0; // 2nd dimension of perlin noise
let cnv;
let j = 0;
function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  // console.log(cnv);
  noStroke();
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  j+=0.015;
  background(255);

  fill(color(0,0,255));
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 15) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    // vertex(x, y+250-(sin(j*2)*50));
    // vertex(x, y+250-sin(j*2));
    vertex(x*1.2, y+300-(sin(j)*50));
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
