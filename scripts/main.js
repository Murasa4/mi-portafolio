// Modal para mini-proyectos
const modal = document.getElementById('modal-proyecto');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImages = [];
let currentIndex = 0;

// Abrir modal al click en card o miniatura
document.querySelectorAll('.mini-proyecto-card').forEach(card => {
    const thumbs = card.querySelectorAll('.thumb');

    // Click en la card
    card.addEventListener('click', (e) => {
        // Evitar que se abra doble al click en miniaturas o GitHub
        if(e.target.classList.contains('thumb') || e.target.classList.contains('github-link') || e.target.tagName === 'I') return;
        currentImages = JSON.parse(card.getAttribute('data-images'));
        currentIndex = 0;
        modal.style.display = 'flex';
        modalImg.src = currentImages[currentIndex];
    });

    // Click en miniaturas
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', (e) => {
            e.stopPropagation(); // evitar abrir modal de card
            currentImages = JSON.parse(card.getAttribute('data-images'));
            currentIndex = index;
            modal.style.display = 'flex';
            modalImg.src = currentImages[currentIndex];
        });
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











