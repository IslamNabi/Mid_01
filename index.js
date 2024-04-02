let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName('slider-image').length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName('slider-image').length - 1;
    }
    showSlide(slideIndex);
}

function jumpToSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

function showSlide(index) {
    const slides = document.getElementsByClassName('slider-image');
    const thumbnails = document.getElementsByClassName('thumbnail');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        thumbnails[i].classList.remove('active-thumbnail');
    }
    
    slides[index].classList.add('active');
    thumbnails[index].classList.add('active-thumbnail');
}
