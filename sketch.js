let stars = []; 

function setup() {
  createCanvas(800, 600);
  
  //star positions
  for (let i = 0; i < 10; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 5) // Random size for the stars
    });
  }
}

function draw() {
  background(0); // Black for the "night sky"
  // Drawing the stars
  for (let star of stars) {
    fill(255); // White color for the stars
    noStroke();
    ellipse(star.x, star.y, star.size);
  }
}


