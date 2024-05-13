// Carrossel Imagens Sobre
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage()
}, 9000);

function nextImage(){
    count++
    if(count > 6) {
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}

// Carrossel Camp
let currentSlide = 0;

function updateSlide() {
    const carrosselInner = document.querySelector('.carrosselCamps-inner');
    const slideWidth = document.querySelector('.carrossel-slide').clientWidth;
    carrosselInner.style.transform = `translateX(-${slideAtual * slideWidth}px)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carrossel-slide').length;
    slideAtual = (slideAtual + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carrossel-slide').length;
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    updateSlide()
}