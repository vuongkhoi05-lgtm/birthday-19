/* =====================================
   LETTER.JS
   Open Envelope + Typing Letter
===================================== */


// ===============================
// LẤY ELEMENT
// ===============================

const openLetterBtn =
document.getElementById("openLetter");


const letterContent =
document.getElementById("letterContent");




// ===============================
// NỘI DUNG LÁ THƯ
// ===============================


const letterText = `

Gửi cô gái tuổi 19 ❤️


Hôm nay là một ngày thật đặc biệt,
ngày em bước sang một tuổi mới.


Từ cô bé nhỏ năm nào với nụ cười
ngây thơ, em đã trưởng thành thành
một cô gái mang theo những ước mơ
và hy vọng của riêng mình.


Anh mong rằng tuổi 19 của em sẽ
luôn có thật nhiều niềm vui, luôn
giữ được nụ cười đẹp nhất và luôn
tin tưởng vào bản thân.


Cảm ơn em vì đã xuất hiện,
vì đã tạo nên những kỷ niệm thật đẹp.


Chúc em sinh nhật vui vẻ ❤️

`;





let opened=false;



// ===============================
// MỞ LÁ THƯ
// ===============================


if(openLetterBtn){


openLetterBtn.addEventListener(
"click",
()=>{


if(opened) return;


opened=true;



openLetterBtn.innerHTML=
"💌 Đã mở thư";



letterContent.style.display=
"block";



letterContent.classList.add(
"open-letter"
);



typeWriter();



createSparkle();




});



}






// ===============================
// HIỆU ỨNG ĐÁNH MÁY
// ===============================


let index=0;



function typeWriter(){



letterContent.innerHTML="";



const typing =
setInterval(()=>{


letterContent.innerHTML +=

letterText.charAt(index);



index++;



if(index >= letterText.length){


clearInterval(typing);


letterContent.style.borderRight=
"none";


}



},45);



}





// ===============================
// TẠO HẠT SÁNG
// ===============================


function createSparkle(){


for(let i=0;i<40;i++){


const sparkle =
document.createElement("span");


sparkle.innerHTML="✨";


sparkle.style.position=
"fixed";


sparkle.style.left =
Math.random()*100+"vw";


sparkle.style.top =
Math.random()*100+"vh";


sparkle.style.fontSize =
(10+Math.random()*20)+"px";


sparkle.style.animation =
"fadeIn 2s";



document.body.appendChild(
sparkle
);



setTimeout(()=>{


sparkle.remove();


},2500);



}


}