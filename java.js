canvas=document.getElementById("myCanvas");ctx= canvas.getContext("2d");

color = "#41A099"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 45;
ctx.arc(200, 200, 60 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", xd)
function xd(parametro_TE_NESESITO_PARA_UNA_FUNCION_AAAAAAAAAAAAAAAA){ color = document.getElementById("color").value;
console.log(color);
//final de la actividad adicional

 mouse_x = parametro_TE_NESESITO_PARA_UNA_FUNCION_AAAAAAAAAAAAAAAA.clientX - canvas.offsetLeft;
 mouse_y = parametro_TE_NESESITO_PARA_UNA_FUNCION_AAAAAAAAAAAAAAAA.clientY - canvas.offsetTop;

console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
circle(mouse_x , mouse_y);  }

function circle(mouse_x,mouse_y){ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 45;
    ctx.arc(mouse_x, mouse_y, 60 ,0 , 2*Math.PI);
    ctx.stroke();}