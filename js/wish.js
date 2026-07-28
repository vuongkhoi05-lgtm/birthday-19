/* =====================================
   WISH.JS
   Make A Wish Effect
===================================== */


// ===============================
// LẤY BUTTON
// ===============================

const wishBtn =
document.getElementById("wishBtn");



// ===============================
// CLICK WISH
// ===============================


if(wishBtn){


wishBtn.addEventListener(
"click",
()=>{


wishBtn.innerHTML =
"🌠 Wish Sent ❤️";



createWishMessage();


createShootingStars();


createWishParticles();



});



}






// ===============================
// HIỆN LỜI ƯỚC
// ===============================


function createWishMessage(){



const message =
document.createElement("div");



message.className=
"wish-message";



message.innerHTML=`

<h1>
✨ Điều ước của em ✨
</h1>

<p>
Mong rằng tuổi 19 sẽ luôn
đầy niềm vui, hạnh phúc
và những điều tuyệt vời nhất ❤️
</p>

`;



document.body.appendChild(
message
);



setTimeout(()=>{


message.classList.add(
"show"
);


},100);




setTimeout(()=>{


message.remove();


},6000);



}






// ===============================
// SAO BĂNG
// ===============================


function createShootingStars(){



for(let i=0;i<8;i++){



const star =
document.createElement("div");



star.className=
"wish-star";



star.style.top =
Math.random()*50+"vh";



star.style.left =
Math.random()*100+"vw";



star.style.animationDelay =
(i*0.3)+"s";



document.body.appendChild(
star
);



setTimeout(()=>{


star.remove();


},4000);



}



}







// ===============================
// HẠT SÁNG
// ===============================


function createWishParticles(){



for(let i=0;i<60;i++){



const particle =
document.createElement("span");



particle.innerHTML=
"✨";



particle.style.position=
"fixed";



particle.style.left =
Math.random()*100+"vw";


particle.style.top =
Math.random()*100+"vh";


particle.style.fontSize =
(10+Math.random()*25)+"px";


particle.style.animation=
"zoomIn 2s";



document.body.appendChild(
particle
);



setTimeout(()=>{


particle.remove();


},3000);



}


}