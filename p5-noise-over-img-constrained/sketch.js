let img;

function preload(){
    img = loadImage("aritz-min_opt_white.jpg");
}

function setup() {
  createCanvas(400, 579);

  img.resize(400, 579);
  image(img, 0, 0, img.width, img.height);
  img.loadPixels();
}
document.getElementsByTagName("BODY")[0].onmousemove = function (){
  console.log("Mouse Over");
  loadPixels();


  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      var index = (i + j * img.width) * 4;
        let r = img.pixels[index + 0];
        let g =  img.pixels[index + 1];
        let b = img.pixels[index + 2];

        let slider = Math.max(0, Math.min(mouseX, img.width))
        let brightness = (((r + g + b)/3)/255.0) * img.width

        if (brightness < slider){
          pixels[index + 0] = 0;
          pixels[index + 1] = 0;
          pixels[index + 2] = 0;
          pixels[index + 3] = random(255);
        }else{
          pixels[index + 0] = r;
          pixels[index + 1] = g;
          pixels[index + 2] = b;
          pixels[index + 3] = 255;
        }

    }
  }
  updatePixels();
};
