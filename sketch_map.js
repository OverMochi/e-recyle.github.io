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
  link = createA('index.html', '');
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
  text('Find trash bins near you:', 30, 170,280,22);

  image(imgmap,30,210,315,508);

  img = createImg('home.png').parent(link);
  img.position(86, 740);
  img.size(203,50);

}
