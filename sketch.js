var medFont, regFont, semiFont, lightFont;
var image2, image3, image4, image5, image6
var icon1, icon2;
var bar;
var logo;
var xloc1,xloc2,xloc3;
var xlocimg, ylocimg;

function preload(){
  image2 = loadImage('takeout.png');
  image3 = loadImage('plastic.png');
  image4 = loadImage('glass.png');
  image5 = loadImage('paper.png');
  image6 = loadImage('batteries.png');
  icon1 = loadImage('menu.png');
  icon2 = loadImage('close.png');
  bar = loadImage('status_bar.png');
  logo = loadImage('e-recycle.png');
  medFont = loadFont('Montserrat-Medium.ttf');
  regFont = loadFont('Montserrat-Regular.ttf');
  semiFont = loadFont('Montserrat-SemiBold.ttf');
  lightFont = loadFont('Montserrat-Light.ttf');
}

function setup() {
  // put setup code here
  createCanvas(375, 812);
  link = createA('item.html', '');
  link2 = createA('menu.html', '');
  xloc1 = -375;
  xloc2 = -350;
  xloc3 = -344;
  xlocimg = 81;
  ylocimg = 279;
}

function draw() {
  // put drawing code here
  background(237,237,237);
  fill(0,163,153);
  noStroke();
  rect(0, 0, 375, 133);
  image(bar,0,0,375,45);
  image(logo,87,75,202,28);

  textSize(20)
  fill(128);
  textFont(medFont);
  textAlign(CENTER);
  text('Choose the category you would like to dispose:', 48, 178,280,54);

  fill(255);
  rect(30, 259, 147, 147, 15);
  rect(198, 259, 147, 147, 15);
  rect(30, 434, 147, 147, 15);
  rect(198, 434, 147, 147, 15);
  rect(30, 609, 147, 147, 15);
  rect(198, 609, 147, 147, 15);

  image(image2,238,313,67,34);
  image(image3,83,461,34,76);
  image(image4,253,468,36,66);
  image(image5,77,643,52,65);
  image(image6,258,640,28,68);

  textSize(18)
  fill(128);
  textFont(medFont);
  text('CUPS', 78, 373,51,20);
  text('TAKE OUT', 226, 373,98,20);
  text('PLASTIC', 65, 546,76,20);
  text('GLASS', 242, 546,60,20);
  text('PAPER', 72, 721,63,20);
  text('BATTERIES', 221, 721,100,20);

  img = createImg('cups.png').parent(link);
  img.position(xlocimg, ylocimg);
  img.size(45,78);

  img = createImg('menu.png').parent(link2);
  img.position(24, 73);
  img.size(30,30);
}
