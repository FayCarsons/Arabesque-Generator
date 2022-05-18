const canvasSize = 700
var circlesAmt = 12000
var freq = 1
var tim = 0

function mod(n, m) {
  return ((n % m) + m) % m;
}

function sinee(x) {
  return sin(x*TWO_PI);
}

function cosinee(x) {
  return cos(x*TWO_PI);
}

function ramp(x) {
  return (mod(x,1)-0.5)*2;
}

function tri(x) {
  x = mod(x,1)
  if (x < 0.5) {
    return ((x * 2) - 0.5) * 2
  }
  else {
    return ((1 - (x - 0.5) * 2) - 0.5) * 2
  }
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(10);  
}

function draw() {
  colorMode(RGB,255);
  background(0);
  noStroke();
  noiseDetail(23, 0.25)
  
  tim++;
  let wave = (x) => noise(ramp(x*777),tri(x)) * tri(cosinee(x*333));
  
  for (i = 0; i < circlesAmt; i++) {
    fill(255,155+tri(sinee(tim*0.01))*noise(sinee(tim/4))*100);
    circle(
    ((i+0.5)*canvasSize/circlesAmt)+sinee(sinee(tim/80)*tim/16)*2,
    ((1+wave(i*freq/circlesAmt))*canvasSize/2)+tri(cosinee(tim*0.1))*2,
    2);
  }
 
} 

