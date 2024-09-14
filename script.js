// script.js

// Funkce pro otevření galerie
function openGallery(index) {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    currentSlide(index);
}

// Funkce pro zavření galerie
function closeGallery() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Funkce pro změnu slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funkce pro zobrazení slide
function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Funkce pro inicializaci slideru
let slideIndex = 1;
showSlides(slideIndex);

// Funkce pro volání objednávky
function callOrder() {
    window.location.href = 'tel:607102261';
}

// Funkce pro změnu sekce
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});
