/* =====================================
   MUSIC.JS
   Playlist + Player
===================================== */

// ===== DANH SÁCH NHẠC =====
const playlist = [
    {
        title: "Happy Birthday",
        src: "music/birthday.mp3"
    },
    {
        title: "Galaxy Love",
        src: "music/song2.mp3"
    },
    {
        title: "Beautiful Memories",
        src: "music/song3.mp3"
    }
];

let currentSong = 0;

// ===== AUDIO =====
const audio = new Audio();
audio.src = playlist[currentSong].src;
audio.loop = false;

// ===== ELEMENT =====
const playBtn = document.getElementById("playMusic");
const nextBtn = document.getElementById("nextMusic");
const prevBtn = document.getElementById("prevMusic");
const progress = document.getElementById("musicProgress");
const volume = document.getElementById("musicVolume");
const title = document.getElementById("musicTitle");

// ===== HIỂN THỊ TÊN BÀI =====
function loadSong(index){

    currentSong = index;

    audio.src = playlist[currentSong].src;

    if(title){

        title.textContent = playlist[currentSong].title;

    }

}

loadSong(0);

// ===== PLAY / PAUSE =====
if(playBtn){

playBtn.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

        playBtn.innerHTML="⏸ Pause";

    }else{

        audio.pause();

        playBtn.innerHTML="▶ Play";

    }

});

}

// ===== NEXT =====
if(nextBtn){

nextBtn.addEventListener("click",()=>{

    currentSong++;

    if(currentSong>=playlist.length){

        currentSong=0;

    }

    loadSong(currentSong);

    audio.play();

    if(playBtn){

        playBtn.innerHTML="⏸ Pause";

    }

});

}

// ===== PREVIOUS =====
if(prevBtn){

prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong<0){

        currentSong=playlist.length-1;

    }

    loadSong(currentSong);

    audio.play();

    if(playBtn){

        playBtn.innerHTML="⏸ Pause";

    }

});

}

// ===== TỰ CHUYỂN BÀI =====
audio.addEventListener("ended",()=>{

    currentSong++;

    if(currentSong>=playlist.length){

        currentSong=0;

    }

    loadSong(currentSong);

    audio.play();

});

// ===== THANH TIẾN TRÌNH =====
audio.addEventListener("timeupdate",()=>{

    if(progress){

        progress.value =
        (audio.currentTime/audio.duration)*100 || 0;

    }

});

if(progress){

progress.addEventListener("input",()=>{

    audio.currentTime=
    (progress.value/100)*audio.duration;

});

}

// ===== ÂM LƯỢNG =====
if(volume){

volume.addEventListener("input",()=>{

    audio.volume=volume.value;

});

volume.value=0.5;

audio.volume=0.5;

}

// ===== TỰ PHÁT SAU KHI NGƯỜI DÙNG TƯƠNG TÁC =====
document.addEventListener("click",()=>{

    if(audio.paused){

        audio.play().catch(()=>{});

        if(playBtn){

            playBtn.innerHTML="⏸ Pause";

        }

    }

},{once:true});
