// Carrusel de imágenes
const slides = document.querySelectorAll('.carrusel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000); // cambia cada 4 segundos

function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Eventos botones del carrusel
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

// Mostrar más / menos imágenes de galería
const toggleBtn = document.getElementById("toggleGaleriaBtn");
const extras = document.querySelectorAll(".galeria-img.extra");
let mostrarMas = true;

toggleBtn.addEventListener("click", () => {
    extras.forEach(img => img.classList.toggle("hidden"));
    toggleBtn.textContent = mostrarMas ? "Mostrar menos" : "Mostrar más";
    toggleBtn.setAttribute("aria-expanded", mostrarMas ? "true" : "false");
    mostrarMas = !mostrarMas;
});

// Modal de imagen
const modal = document.getElementById("galeriaModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Abrir modal al hacer clic en una imagen
document.querySelectorAll(".galeria-img").forEach(img => {
    img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    });
});

// Cerrar modal al hacer clic en la X
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function (event) {
    if (event.target === modal) {
    modal.style.display = "none";
    }
};

modal.style.display = "block";
document.body.style.overflow = "hidden";

// Al cerrar:
modal.style.display = "none";
document.body.style.overflow = "auto";

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('active');
    });
});
