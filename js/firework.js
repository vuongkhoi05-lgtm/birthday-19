/* =====================================
   FIREWORK.JS
   Birthday Firework Effect
===================================== */


const fireworkCanvas =
document.createElement("canvas");


fireworkCanvas.id =
"fireworkCanvas";


document.body.appendChild(
fireworkCanvas
);



const fireCtx =
fireworkCanvas.getContext("2d");



function resizeFirework(){


fireworkCanvas.width =
window.innerWidth;


fireworkCanvas.height =
window.innerHeight;


}


resizeFirework();



window.addEventListener(
"resize",
resizeFirework
);





// ===============================
// FIREWORK DATA
// ===============================


let fireworks=[];



class Firework{


constructor(x,y){


this.x=x;

this.y=y;


this.particles=[];



for(let i=0;i<80;i++){


this.particles.push({

x:x,

y:y,

speed:
Math.random()*5+1,

angle:
Math.random()*Math.PI*2,

alpha:1,

size:
Math.random()*3+1


});


}



}



update(){



this.particles.forEach(p=>{


p.x +=
Math.cos(p.angle)
*
p.speed;


p.y +=
Math.sin(p.angle)
*
p.speed;



p.alpha -=0.015;



});



}



draw(){



this.particles.forEach(p=>{


fireCtx.beginPath();



fireCtx.fillStyle=

`rgba(255,255,255,${p.alpha})`;



fireCtx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);



fireCtx.fill();



});



}



}




// ===============================
// CREATE FIREWORK
// ===============================


function createFirework(){



const x =
Math.random()
*
fireworkCanvas.width;



const y =
Math.random()
*
fireworkCanvas.height
*
0.5;



fireworks.push(
new Firework(x,y)
);



}





// ===============================
// ANIMATION
// ===============================


function animateFirework(){


fireCtx.clearRect(

0,

0,

fireworkCanvas.width,

fireworkCanvas.height

);



fireworks.forEach((fire,index)=>{


fire.update();

fire.draw();



if(
fire.particles[0].alpha<=0
){


fireworks.splice(
index,
1
);


}



});



requestAnimationFrame(
animateFirework
);



}


animateFirework();





// ===============================
// AUTO FIREWORK
// ===============================


setInterval(()=>{


createFirework();


},1800);







// ===============================
// CLICK FIREWORK
// ===============================


document.addEventListener(
"click",
(e)=>{


fireworks.push(
new Firework(
e.clientX,
e.clientY
)
);


});