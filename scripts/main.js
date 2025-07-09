// Esperar que el DOM esté cargado (opcional)
document.addEventListener('DOMContentLoaded', () => {
    particlesJS("particles-js", {
        particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#e40000" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#4a1d8d",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out"
        }
        },
        interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
        }
        },
        retina_detect: true
    });
});


// cuadro oculto de la info
let slimeDisponible = true; // se activa al inicio y después de apretar home

function mostrarSeccion(seccion, evento = null) {
    const cuadro = document.getElementById('cuadro-central');
    const contenido = document.getElementById('contenido-cuadro');
    const inicio = document.getElementById('inicio');
    const slime = document.getElementById('slime-overlay');

    // Remover clase activa de mini-secciones
    document.querySelectorAll('.mini-seccion').forEach(el => el.classList.remove('activo'));

    if (seccion === 'home') {
        cuadro.classList.remove('visible');
        inicio.style.display = 'flex';
        slimeDisponible = true; // 🔁 reactiva slime al volver a home
        setTimeout(() => contenido.innerHTML = '', 400);
        return;
    }

    // Calcular centro pantalla
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Mostrar cuadro sin animación si slime ya fue usado
    if (!slimeDisponible || !evento) {
        cuadro.classList.add('visible');
    } else {
        // 🧪 Animación de slime SOLO si disponible
        const rect = evento.target.getBoundingClientRect();
        const fromX = rect.left + rect.width / 2;
        const fromY = rect.top + rect.height / 2;

        slime.style.left = `${fromX - 20}px`;
        slime.style.top = `${fromY - 20}px`;
        slime.style.opacity = '1';
        slime.style.width = '40px';
        slime.style.height = '40px';
        slime.style.borderRadius = '50%';

        void slime.offsetWidth; // reflow

        slime.style.transition = 'all 0.7s ease';
        slime.style.left = `${centerX - 150}px`;
        slime.style.top = `${centerY - 150}px`;
        slime.style.width = '300px';
        slime.style.height = '300px';
        slime.style.borderRadius = '30px';

        setTimeout(() => {
            cuadro.classList.add('visible');
            slime.style.opacity = '0';
        }, 700);

        slimeDisponible = false;
    }

    inicio.style.display = 'none';

    const miniId = document.getElementById(`mini-${seccion}`);
    if (miniId) miniId.classList.add('activo');

    contenido.style.opacity = 0;
    setTimeout(() => {
        if (seccion === 'about') {
            contenido.innerHTML = `<div class="texto-seccion"><h2>Sobre mí</h2><p></p></div>`;
        } else if (seccion === 'projects') {
            contenido.innerHTML = `<div class="texto-seccion"><h2>Proyectos</h2></div>`;
        } else if (seccion === 'herramientas') {
            contenido.innerHTML = `<div class="texto-seccion"><h2>Herramientas</h2></div>`;
        } else if (seccion === 'certificado') {
            contenido.innerHTML = `<div class="mini-seccion"><b>Certificados</b></div>`;
        }
        contenido.style.opacity = 1;
    }, 200);
}









