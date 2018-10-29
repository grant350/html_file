

var z = 0;
var x = 10
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');
canvasContext.innerWindowWidth = "100%"
 // var n = canvas.width = window.innerHTML;
/*
function y(){
if (z < 9){
// innerHeight
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = "yellow";

canvasContext.fillRect(x, x, 100, 100);
console.log(canvasContext)

x = x + 10
if (x == 50){x = -50}

z++}
setTimeout(y,500)
}
y()
*
canvasContext.beginPath();
canvasContext.moveTo(20,200);
canvasContext.lineTo(100,20);
canvasContext.strokeStyle = "red";
canvasContext.stroke()
//strokeStyle
//arc
*/
var c = 10
var b = 30
var canvas = document.getElementById('canvas')
var canvasX = canvas.getContext("2d");
function func(){
var grad = canvasX.createLinearGradient(b,c,200,200);
grad.addColorStop(.4,"purple")
grad.addColorStop(.2,"red")
grad.addColorStop(.3,"blue")
canvasX.fillStyle = grad
canvasX.fillRect(x,50,100,50)
//c = c + 1

if (x <= 101){x++}else {
if (x >= 100 && x <= 200){x--}
}
console.log(x)
setTimeout(func,100)
}
func()
