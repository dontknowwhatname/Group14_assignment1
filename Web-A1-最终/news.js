let currentSlide = 0; // Current slide index
const slides = document.querySelectorAll('.carousel-item'); // Get all slides

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
        if (i === index) {
            slide.classList.add('active'); // Show the current slide
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop to the next slide
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the previous slide
}

// Initialize to show the first slide
showSlide(currentSlide);
