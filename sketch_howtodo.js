var medFont, regFont, semiFont;
var arrow1;
var image1, image2, image3;
var icon1;
var bar;
var logo;
function preload() {
  image1 = loadImage('wash.png');
  image2 = loadImage('breakdown.png');
  image3 = loadImage('recycle.png');
  arrow1 = loadImage('Arrow02.png');
  icon1 = loadImage('menu.png');
  bar = loadImage('status_bar.png');
  logo = loadImage('e-recycle.png');
  medFont = loadFont('Montserrat-Medium.ttf');
  regFont = loadFont('Montserrat-Regular.ttf');
  semiFont = loadFont('Montserrat-SemiBold.ttf');

}

function setup() {
  // put setup code here
  createCanvas(375, 868);
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

  textSize(37)
  fill(128);
  textFont(medFont);
  textAlign(CENTER);
  text('PLASTIC CUPS', 44, 174,288,38);

  textSize(17)
  fill(128);
  textFont(medFont);
  text('Step-by-step:', 38, 217,300,22);

  fill(255);
  ellipseMode(CORNER);
  ellipse(27,279,127,128);
  ellipse(27,452,127,128);
  ellipse(27,625,127,128);

  textSize(17)
  fill(0,163,153);
  textFont(medFont);
  textAlign(LEFT);
  text('Wash it!', 195,331,78,45);
  text('Break it down!', 195,498,80,45);
  text('Put it in the correct trash bin!', 195,654,120,70);

  img = createImg('learnmore.png').parent(link);
  img.position(86, 793);
  img.size(203,50);


  image(arrow1,80,406,20,52);
  image(arrow1,80,580,20,52);

  image(image1,64,308,62,70);
  image(image2,48,490,85,64);
  image(image3,59,661,64,57);

}
