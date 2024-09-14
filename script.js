let slideIndex = 1;
showSlides(slideIndex);

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Slideshow auto-rotace
let autoIndex = 0;
carousel();

function carousel() {
  let x = document.getElementsByClassName("slide");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  autoIndex++;
  if (autoIndex > x.length) {autoIndex = 1}    
  x[autoIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Změna každé 3 sekundy
}

function callOrder() {
    window.location.href = 'tel:607102261';
}
