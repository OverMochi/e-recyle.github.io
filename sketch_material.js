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
  link = createA('disassemble.html', '');
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

  textSize(17)
  fill(128);
  textFont(medFont);
  textAlign(CENTER);
  text('Choose the type of cup:', 37, 184,315,22);

  fill(255);
  rect(30, 259, 147, 147,15);
  rect(198, 259, 147, 147,15);
  rect(30, 434, 147, 147,15);
  rect(198, 434, 147, 147,15);

  textSize(18)
  fill(128);
  textFont(medFont);
  text('PLASTIC', 65, 373,76,20);
  text('PAPER', 240, 373,63,20);
  text('STYROFOAM', 45, 546,116,20);
  text('METAL', 240, 546,63,20);


  img = createImg('cups.png').parent(link);
  img.position(81, 279);
  img.size(45,78);


}
