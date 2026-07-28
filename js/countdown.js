/* =====================================
   COUNTDOWN.JS
   Birthday Countdown
===================================== */


// ===============================
// CÀI ĐẶT NGÀY SINH NHẬT
// Thay đổi ngày giờ tại đây
// ===============================

const birthdayDate = new Date(
    "2026-09-01 00:00:00"
).getTime();



// ===============================
// LẤY ELEMENT
// ===============================

const daysElement =
document.getElementById("days");

const hoursElement =
document.getElementById("hours");

const minutesElement =
document.getElementById("minutes");

const secondsElement =
document.getElementById("seconds");




// ===============================
// COUNTDOWN
// ===============================

function updateCountdown(){


    const now =
    new Date().getTime();


    const distance =
    birthdayDate - now;



    // nếu tới sinh nhật

    if(distance <= 0){


        clearInterval(countdownTimer);


        if(daysElement)
            daysElement.innerHTML="00";

        if(hoursElement)
            hoursElement.innerHTML="00";

        if(minutesElement)
            minutesElement.innerHTML="00";

        if(secondsElement)
            secondsElement.innerHTML="00";


        birthdayMoment();


        return;

    }



    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );


    const hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );



    const minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );



    const seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );



    if(daysElement)
        daysElement.innerHTML =
        formatTime(days);


    if(hoursElement)
        hoursElement.innerHTML =
        formatTime(hours);


    if(minutesElement)
        minutesElement.innerHTML =
        formatTime(minutes);


    if(secondsElement)
        secondsElement.innerHTML =
        formatTime(seconds);


}




// ===============================
// FORMAT SỐ
// ===============================


function formatTime(number){


    return number < 10
    ? "0"+number
    : number;


}




// ===============================
// KHOẢNH KHẮC SINH NHẬT
// ===============================


function birthdayMoment(){


    const title =
    document.createElement("div");


    title.className=
    "birthday-popup";


    title.innerHTML=`

        <h1>
        🎉 Happy Birthday 🎉
        </h1>

        <p>
        Chúc mừng sinh nhật tuổi 19 ❤️
        </p>

    `;



    document.body.appendChild(title);



    // thêm hiệu ứng pháo hoa nếu có

    if(typeof createFirework === "function"){

        createFirework();

    }



}



// chạy mỗi giây

const countdownTimer =
setInterval(
    updateCountdown,
    1000
);



// chạy ngay khi mở trang

updateCountdown();