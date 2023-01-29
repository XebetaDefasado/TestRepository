var leaf = document.getElementById("leafTry");
var ctx = leaf.getContext("2d");

ctx.strokeStyle = "#000"
ctx.lineWidth = 15

ctx.moveTo(150, 150*0.15);
ctx.lineTo(150, 0);
ctx.stroke();