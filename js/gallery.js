/* =====================================
   GALLERY.JS
   Galaxy Birthday Gallery
===================================== */

const galleryImages = document.querySelectorAll(".gallery img");

let currentIndex = 0;

// ===============================
// TẠO LIGHTBOX
// ===============================

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
<div class="lightbox-container">

    <span id="closeLightbox">&times;</span>

    <button id="prevImage">❮</button>

    <img id="lightboxImage">

    <button id="nextImage">❯</button>

</div>
`;

document.body.appendChild(lightbox);

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

const prevImage =
document.getElementById("prevImage");

const nextImage =
document.getElementById("nextImage");


// ===============================
// MỞ ẢNH
// ===============================

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

        lightbox.classList.add("show");

    });

});


// ===============================
// HIỂN THỊ
// ===============================

function showImage(){

    lightboxImage.src =
    galleryImages[currentIndex].src;

}


// ===============================
// ĐÓNG
// ===============================

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});


// ===============================
// CLICK NGOÀI
// ===============================

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});


// ===============================
// ẢNH TRƯỚC
// ===============================

prevImage.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=
        galleryImages.length-1;

    }

    showImage();

});


// ===============================
// ẢNH SAU
// ===============================

nextImage.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage();

});


// ===============================
// PHÍM MŨI TÊN
// ===============================

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="ArrowRight"){

        nextImage.click();

    }

    if(e.key==="ArrowLeft"){

        prevImage.click();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

});
