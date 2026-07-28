/* =====================================
   MAIN.JS
   Birthday Galaxy Website
===================================== */


// ===============================
// WAIT WEBSITE LOAD
// ===============================

window.addEventListener("load",()=>{


    const loading = document.getElementById("loading");


    setTimeout(()=>{


        loading.style.opacity="0";


        setTimeout(()=>{

            loading.style.display="none";

        },1000);



    },2500);



});




// ===============================
// ENTER BUTTON
// ===============================


const enterBtn =
document.getElementById("enterBtn");


if(enterBtn){


enterBtn.addEventListener("click",()=>{


    document.body.classList.add("birthday-start");


    // bật nhạc

    const music =
    document.getElementById("birthdayMusic");


    if(music){

        music.volume=0.5;

        music.play();

    }



    // cuộn xuống countdown


    document
    .getElementById("countdown")
    .scrollIntoView({

        behavior:"smooth"

    });



});

}





// ===============================
// MUSIC BUTTON
// ===============================


const musicBtn =
document.getElementById("musicBtn");


const music =
document.getElementById("birthdayMusic");


let musicPlaying=false;



if(musicBtn){


musicBtn.addEventListener("click",()=>{


if(!musicPlaying){


music.play();

musicPlaying=true;

musicBtn.innerHTML="🔊";


}

else{


music.pause();

musicPlaying=false;

musicBtn.innerHTML="🎵";


}



});


}





// ===============================
// CREATE HEART EFFECT
// ===============================


function createHeart(){


const heart =
document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";



heart.style.left =
Math.random()*100+"vw";



heart.style.bottom="-20px";


heart.style.animationDuration =

(3+Math.random()*3)+"s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},6000);



}



// tạo tim bay tự động


setInterval(()=>{


createHeart();


},1200);







// ===============================
// BUTTON RIPPLE EFFECT
// ===============================


document.querySelectorAll("button")
.forEach(button=>{


button.addEventListener("click",function(e){


let ripple =
document.createElement("span");


ripple.className="ripple";


this.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);



});


});






// ===============================
// SCROLL REVEAL
// ===============================


const revealElements =
document.querySelectorAll(

".card,.gallery img,.envelope"

);



function reveal(){


revealElements.forEach(el=>{


const top =
el.getBoundingClientRect().top;



if(top < window.innerHeight-100){


el.classList.add("fade-in");


}



});


}



window.addEventListener(
"scroll",
reveal
);


reveal();