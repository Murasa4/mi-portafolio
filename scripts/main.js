// certificados
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.overlay')) {
        createModal();
    }
    

    const overlay = document.querySelector('.overlay');
    const overlayImg = document.querySelector('.overlay-img');
    const closeBtn = document.querySelector('.overlay .close');
    
    const certificateImages = document.querySelectorAll('.card-proyecto-certificado img');
    
    certificateImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita que se propague al contenedor
            openModal(this.src, this.alt);
        });
    });
    
    // Función para abrir el modal
    function openModal(imageSrc, imageAlt) {
        overlayImg.src = imageSrc;
        overlayImg.alt = imageAlt;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Bloquea scroll del body
    }
    
    // Función para cerrar el modal
    function closeModal() {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura scroll del body
    }
    
    // Event listeners para cerrar el modal
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar al hacer clic fuera de la imagen
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    // Cerrar con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closeModal();
        }
    });
});

// Función para crear el modal dinámicamente
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'overlay';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="overlay-img" src="" alt="">
    `;
    document.body.appendChild(modal);
}

// Menu de iconos
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}
