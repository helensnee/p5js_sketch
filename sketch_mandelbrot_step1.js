
var minval = -0.5;
var maxval = 0.5;

var minSlider; 
var maxSlider;


function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);
}

function draw() {
  
  var maxiterations = 100;
  
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      var b = map(y, 0, width, minSlider.value(), maxSlider.value());
      //var b = map(y, 0, height, -2.5, 2.5);
     
     var n = 0;
     var z = 0;
     var ca = a;
     var cb = b;
     
     while (n < maxiterations) {
       aa = a*a - b*b;
       bb = 2*a*b;
         
       a = aa + ca;
       b = bb + cb;
       
       if (abs(a + b) > 16) {
          break;
       }
       n++;
    }
    
      var bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright),0, 1, 0, 255);
      //var bright = (n * 16) % 255;
      
       if (n == maxiterations) {
         bright = 0;
       }
       
         
      
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
      
    }
  }
  updatePixels();
      
}
