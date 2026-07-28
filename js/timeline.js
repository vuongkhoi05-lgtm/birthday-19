/* =====================================
   TIMELINE.JS
   1 Tuổi → 19 Tuổi
===================================== */


// ===============================
// LẤY PHẦN TỬ TIMELINE
// ===============================

const timelineCards =
document.querySelectorAll(".card");



// ===============================
// HIỆU ỨNG KHI CUỘN
// ===============================

let timelineCreated = false ;
function timelineReveal(){


timelineCards.forEach((card,index)=>{


const position =
card.getBoundingClientRect().top;



const screenHeight =
window.innerHeight;



if(position < screenHeight - 120){



card.classList.add("show");



if (!timelineCreated) {

    timelineCreated = true;

    createTimelineMessage(
        "🐣 Một tuổi",
        "Ngày ấy em là một cô bé nhỏ xíu với nụ cười trong veo. Những khoảnh khắc ngày thơ ấy đã trở thành những kỷ niệm thật đẹp."
    );

    createTimelineMessage(
        "🎂 Tuổi 19",
        "18 năm trôi qua thật nhanh. Từ cô bé ngày nào, em đã trở thành một cô gái xinh đẹp, mạnh mẽ và đầy ước mơ."
    );

}


}



});



}



// kiểm tra khi cuộn

window.addEventListener(
"scroll",
timelineReveal
);


timelineReveal();






// ===============================
// HIỆU ỨNG ĐƯỜNG THỜI GIAN
// ===============================


const timelineLine =
document.querySelector(".line");



window.addEventListener(
"scroll",
()=>{


if(!timelineLine) return;



const top =
timelineLine.getBoundingClientRect().top;



if(top < window.innerHeight){


timelineLine.classList.add(
"line-active"
);


}



});






// ===============================
// TẠO LỜI NHẮN KỶ NIỆM
// ===============================


function createTimelineMessage(
title,
text
){



const box =
document.createElement("div");



box.className=
"memory-popup";



box.innerHTML=`

<h3>${title}</h3>

<p>${text}</p>

`;



document.body.appendChild(box);



setTimeout(()=>{


box.classList.add(
"hide"
);


},5000);



setTimeout(()=>{


box.remove();


},6500);



}






// ===============================
// HIỆU ỨNG ẢNH
// ===============================


const images =
document.querySelectorAll(
".card img"
);



images.forEach(img=>{


img.addEventListener(
"mouseenter",
()=>{


img.style.transform=
"scale(1.05)";


}
);



img.addEventListener(
"mouseleave",
()=>{


img.style.transform=
"scale(1)";


}
);



});






// ===============================
// TRÁI TIM CHẠY TRÊN TIMELINE
// ===============================


function timelineHeart(){


const heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.fontSize="22px";


heart.style.left="50%";


heart.style.animation=
"heartFloat 4s linear";



document
.querySelector("#timeline")
.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},4000);



}



setInterval(
timelineHeart,
3000
);