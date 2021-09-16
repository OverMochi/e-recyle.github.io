var medFont, regFont, semiFont, lightFont;
var imgmap;
var icon1, icon2;
var bar;
var logo;

function preload(){
  imgmap = loadImage('map.png');
  icon1 = loadImage('menu.png');
  icon2 = loadImage('close.png');
  bar = loadImage('status_bar.png');
  logo = loadImage('e-recycle.png');
  semiFont = loadFont('Montserrat-SemiBold.ttf');
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
  image(icon1,24,73,30,30);

  textSize(17)
  fill(128);
  textFont(semiFont);
  text('Find trash bins near you:', 30, 184,280,22);

  image(imgmap,30,230,315,508);




}
