// JS para abrir modal y navegar imágenes
const modal = document.getElementById('modal-proyecto');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImages = [];
let currentIndex = 0;

// Abrir modal al click en card
document.querySelectorAll('.mini-proyecto-card').forEach(card => {
    card.addEventListener('click', () => {
        currentImages = JSON.parse(card.getAttribute('data-images'));
        currentIndex = 0;
        modal.style.display = 'flex';
        modalImg.src = currentImages[currentIndex];
    });
});

// Cerrar modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Navegación
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
});










