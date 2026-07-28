/* =====================================
   GALAXY.JS
   Create Stars - Meteor - Particles
===================================== */


const galaxy =
document.getElementById("galaxy");

const canvas =
document.getElementById("stars");

const ctx =
canvas ? canvas.getContext("2d") : null;



// ===============================
// CANVAS SETUP
// ===============================


function resizeCanvas(){

    if(!canvas) return;

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}


resizeCanvas();


window.addEventListener(
"resize",
resizeCanvas
);




// ===============================
// STAR SYSTEM
// ===============================


let stars=[];


class Star{


constructor(){

    this.x =
    Math.random()*canvas.width;


    this.y =
    Math.random()*canvas.height;


    this.size =
    Math.random()*2+0.5;


    this.speed =
    Math.random()*0.03+0.01;


    this.opacity =
    Math.random();



}



draw(){


ctx.beginPath();


ctx.fillStyle =
`rgba(255,255,255,${this.opacity})`;


ctx.arc(

this.x,

this.y,

this.size,

0,

Math.PI*2

);


ctx.fill();


}




update(){


this.opacity += this.speed;



if(this.opacity>=1 ||
this.opacity<=0.2){


this.speed =
-this.speed;


}



this.draw();



}



}





// ===============================
// CREATE STARS
// ===============================


function createStars(){


stars=[];


for(
let i=0;
i<350;
i++
){


stars.push(
new Star()
);


}



}




// ===============================
// ANIMATION
// ===============================


function animateGalaxy(){


if(!ctx) return;


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);



stars.forEach(
star=>{

star.update();

}

);



requestAnimationFrame(
animateGalaxy
);



}





createStars();

animateGalaxy();







// ===============================
// METEOR
// ===============================


function createMeteor(){


const meteor =
document.createElement("div");


meteor.className="meteor";



meteor.style.left =

Math.random()*window.innerWidth

+"px";



meteor.style.top =

Math.random()*300

+"px";



meteor.style.animationDuration =

(2+Math.random()*3)

+"s";



galaxy.appendChild(meteor);



setTimeout(()=>{


meteor.remove();


},5000);



}



// tạo sao băng ngẫu nhiên

setInterval(()=>{


createMeteor();


},4000);







// ===============================
// GALAXY PARTICLES
// ===============================


function createParticle(){


const particle =
document.createElement("div");


particle.className="particle";



particle.style.left =

Math.random()*100+"vw";



particle.style.animationDuration =

(5+Math.random()*8)

+"s";



particle.style.opacity =

Math.random();



galaxy.appendChild(
particle
);



setTimeout(()=>{


particle.remove();


},12000);



}



setInterval(()=>{


createParticle();


},300);






// ===============================
// MOUSE STAR TRAIL
// ===============================


document.addEventListener(

"mousemove",

(e)=>{


const sparkle =
document.createElement("span");



sparkle.style.position=
"fixed";


sparkle.style.left=
e.clientX+"px";


sparkle.style.top=
e.clientY+"px";


sparkle.style.width="5px";


sparkle.style.height="5px";


sparkle.style.borderRadius=
"50%";


sparkle.style.background=
"white";


sparkle.style.boxShadow=
"0 0 15px #fff";


sparkle.style.pointerEvents=
"none";


sparkle.style.zIndex=
"9999";



document.body.appendChild(
sparkle
);



setTimeout(()=>{


sparkle.remove();


},500);



}

);