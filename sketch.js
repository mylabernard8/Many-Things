let stars = [];

function setup() {
  createCanvas(800, 600);

  
  for (let i = 0; i < 10; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 5), // Random size
      speed: random(1, 3),
      color: color(255)
    });
  }
}

function draw() {
  background(0);

  for (let star of stars) {
    // Update size and brightness
    star.size += sin(frameCount * 0.05) * 0.1; // pulsating effect
    let brightness = 200 + sin(frameCount * 0.05) * 55; // Twinkling effect

    fill(star.color.levels[0], star.color.levels[1], star.color.levels[2], brightness);
    noStroke();
    ellipse(star.x, star.y, star.size);

    // move the star
    star.y += star.speed;

    // Reset star when it moves off the bottom edge
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }
}

// Add a new star where the mouse is clicked in teh spot where it is clicked
function mousePressed() {
  stars.push({
    x: mouseX,
    y: mouseY,
    size: random(2, 5),
    speed: random(1, 3),
    color: color(255) // white is default
  });
}

// change the color of all stars when a key is pressed
function keyPressed() {
  for (let star of stars) {
    star.color = color(random(255), random(255), random(255)); // Random color
  }
}

