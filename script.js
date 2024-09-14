let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(${-currentIndex * 50}%)`;
}

setInterval(showSlides, 3000); // Změněno na 3000 ms pro plynulejší animaci

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

function callOrder() {
    window.location.href = 'tel:607102261';
}

function openGallery(index) {
    document.getElementById('myModal').style.display = 'block';
    currentSlide(index);
}

function closeGallery() {
    document.getElementById('myModal').style.display = 'none';
}

let slideIndex = 1;
function currentSlide(n) {
    showSlidesModal(slideIndex = n);
}

function plusSlides(n) {
    showSlidesModal(slideIndex += n);
}

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
