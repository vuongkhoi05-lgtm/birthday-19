/* =====================================
   CAKE.JS
   Birthday Cake + Blow Candle
===================================== */


// ===============================
// LẤY ELEMENT
// ===============================

const blowBtn =
document.getElementById("blow");


const cakeImage =
document.querySelector(".cake img");



let candleOn = true;



// ===============================
// THỔI NẾN
// ===============================


if(blowBtn){


blowBtn.addEventListener(
"click",
()=>{


if(!candleOn) return;


candleOn=false;



// đổi nút

blowBtn.innerHTML=
"✨ Điều ước đã được gửi";



// tắt lửa nến

const candle =
document.querySelector(".candle");


if(candle){

    candle.classList.add(
        "candle-off"
    );

}



// rung bánh

if(cakeImage){

cakeImage.classList.add(
"cake-shake"
);


setTimeout(()=>{

cakeImage.classList.remove(
"cake-shake"
);

},2000);


}




// tạo khói

createSmoke();



// tạo sao điều ước

createWishStar();




});



}






// ===============================
// TẠO KHÓI NẾN
// ===============================


function createSmoke(){


for(let i=0;i<12;i++){


const smoke =
document.createElement("div");


smoke.className=
"smoke";



smoke.style.left =
"50%";



smoke.style.bottom =
"180px";



smoke.style.animationDelay =
(i*0.15)+"s";



document
.querySelector(".cake")
.appendChild(smoke);



setTimeout(()=>{


smoke.remove();


},3000);



}



}






// ===============================
// NGÔI SAO ĐIỀU ƯỚC
// ===============================


function createWishStar(){


for(let i=0;i<30;i++){


const star =
document.createElement("div");


star.innerHTML="✨";


star.style.position=
"fixed";


star.style.left =
Math.random()*100+"vw";


star.style.top =
Math.random()*100+"vh";


star.style.fontSize =
(15+Math.random()*25)+"px";



star.style.animation=
"zoomIn 1.5s";



document.body.appendChild(
star
);



setTimeout(()=>{


star.remove();


},2500);



}


}