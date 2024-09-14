// Slideshow obrázků v sekci Domů
let slideIndex = 1;
showSlides(slideIndex);

// Funkce pro otevření modalu
function openGallery(n) {
    document.getElementById("myModal").style.display = "block";
    currentSlide(n + 1); // JS arrays are zero-based but slideIndex is 1-based
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
    showSlides(slideIndex = n);
}

// Funkce pro zobrazení snímků v modalu
function showSlides(n) {
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
let autoIndex = 0;
carousel();

function carousel() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoIndex++;
    if (autoIndex > slides.length) { autoIndex = 1 }
    slides[autoIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Změna každé 3 sekundy
}

// Funkce pro volání
function callOrder() {
    window.location.href = 'tel:607102261';
}

// Navigace mezi sekcemi
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(`#${this.dataset.section}`);

        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        targetSection.classList.add('active');
    });
});
