var c1 = document.getElementById("canvas-1-linha");
var ctx = c1.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c2 = document.getElementById("canvas-2-circulo");
var ctx = c2.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c3 = document.getElementById("canvas-3-texto");
var ctx = c3.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

var c4 = document.getElementById("canvas-4-texto-stroke");
var ctx = c4.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);

var c5 = document.getElementById("canvas-5-gradiente-linear");
var ctx = c5.getContext("2d");
// Create gradient:
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient:
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var c6 = document.getElementById("canvas-6-gradiente-circular");
var ctx = c6.getContext("2d");
// Create gradient:
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient:
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

function imageCanvas() {
    var c7 = document.getElementById("canvas-7-imagem");
    var ctx = c7.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
  }