let stars = []; // Array to hold star positions

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
  background(0); 
  
  for (let star of stars) {
    // Update size and brightness
    star.size += sin(frameCount * 0.05) * 0.1; // Pulsating effect
    let brightness = 200 + sin(frameCount * 0.05) * 55; // Twinkling effect
    
    fill(brightness);
    noStroke();
    ellipse(star.x, star.y, star.size);
    
    star.y += star.speed;

    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }
}


