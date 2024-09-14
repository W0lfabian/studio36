// Slideshow obrázků v sekci Domů
let slideIndex = 1;
showSlides(slideIndex);

// Funkce pro otevření modalu
function openGallery(n) {
    document.getElementById("myModal").style.display = "block";
    currentSlide(n);
}

// Funkce pro zavření modalu
function closeGallery() {
    document.getElementById("myModal").style.display = "none";
}

// Funkce pro zobrazení předchozích a následujících snímků v modalu
function plusSlides(n) {
    currentSlide(slideIndex += n);
}

// Funkce pro nastavení aktuálního snímku
function currentSlide(n) {
    showSlidesModal(slideIndex = n);
}

// Funkce pro zobrazení snímků v modalu
function showSlidesModal(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Automatické přepínání snímků v sekci Domů
let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(showSlides, 3000);

// Navigace mezi sekcemi
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(`#${this.dataset.section}`);

        sections.forEach(section => {
            section.classList.remove('active');
        });

        targetSection.classList.add('active');
    });
});

// Funkce pro volání
function callOrder() {
    window.location.href = 'tel:607102261';
}
