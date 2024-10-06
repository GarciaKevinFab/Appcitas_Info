// Función para abrir el menú en dispositivos móviles
function openmenu() {
    document.getElementById("sidemenu").classList.add("active");
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("active");
}

// Carrusel de Especialidades Médicas
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const buttons = document.querySelectorAll('.carousel-buttons button');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    buttons.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === slideIndex);
    });
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

showSlide(slideIndex);

setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000);

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

// Obtener el año actual en el footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
