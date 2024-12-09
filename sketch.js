function setup() {
  createCanvas(800, 600); 

  for (let i = 0; i < 10; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),// Random size for the stars
      speed: random(1, 3) // speed
    });
  }
}

function draw() {
  background(0);// Random size for the stars 
  // Drawing the stars
  for (let star of stars) {
    fill(255);// White color for the stars
    noStroke();
    ellipse(star.x, star.y, star.size);
    
    // Moving the star
    star.y += star.speed;
    
    // Reset if it moves off the canvas
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }
}

