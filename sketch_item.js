var img1;
var medFont, regFont, semiFont;
var image1;
var icon1;
var bar;
var logo;
function preload(){
  image1 = loadImage('cups.png');
  icon1 = loadImage('menu.png');
  bar = loadImage('status_bar.png');
  logo = loadImage('e-recycle.png');
  medFont = loadFont('Montserrat-Medium.ttf');
  regFont = loadFont('Montserrat-Regular.ttf');
  semiFont = loadFont('Montserrat-SemiBold.ttf');
  //image3 = loadImage('');
  //image4 = loadImage('');
  //image5 = loadImage('');
}

function setup() {
  // put setup code here
  createCanvas(375, 812);
  link = createA('material.html', '');
}

function draw() {
  // put drawing code here
  background(237,237,237);
  fill(0,163,153);
  noStroke();
  rect(0, 0, 375, 133);
  image(bar,0,0,375,45);
  image(logo,87,75,202,28);
  image(icon1,24,73,30,30);

  fill(255);
  rect(0, 179, 375, 194,15);

  textSize(37)
  fill(128);
  textFont(medFont);
  text('CUPS', 56, 263,132,38);

  image(image1,208,220,64,112);

  textSize(17)
  fill(128);
  textFont(medFont);
  textAlign(CENTER);
  text('We use an estimated 16 billion disposable coffee cups each year.', 29, 405,315,44);

  textSize(17)
  fill(128);
  textFont(regFont);
  textAlign(LEFT);
  text('What you can do to help:                     • Take your own mug.                             • Avoid unnecessary lids and straws. • Avoid disposable stirrers—what’s wrong with a spoon?                             • Support single-use plastic and styrofoam bans..', 30, 479,315);

  img = createImg('dispose.png').parent(link);
  img.position(86, 706);
  img.size(203,50);

}
