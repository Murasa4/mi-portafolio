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
            color: "#ffffff",
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
function mostrarSeccion(seccion) {
    const cuadro = document.getElementById('cuadro-central');
    const contenido = document.getElementById('contenido-cuadro');
    const inicio = document.getElementById('inicio');

    // asegurar que este oculto y que inicie con visible
    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cuadro-central').classList.remove('visible');
});


    // Remover clase activa de mini-secciones
    document.querySelectorAll('.mini-seccion').forEach(el => el.classList.remove('activo'));

    if (seccion === 'home') {
        // Ocultar cuadro con animación
        cuadro.classList.remove('visible');
        inicio.style.display = 'flex';
        setTimeout(() => {
        contenido.innerHTML = '';
        }, 400); // esperar a que termine la transición
        return;
    }

    cuadro.classList.add('visible');
    inicio.style.display = 'none'; // ocultar home

    // Mostrar cuadro si no estaba visible
    cuadro.classList.add('visible');

    // Marcar mini-sección activa
    document.getElementById(`mini-${seccion}`).classList.add('activo');

    // Animar cambio de contenido: desvanecer + reemplazar
    contenido.style.opacity = 0;
    setTimeout(() => {
        if (seccion === 'about') {
        contenido.innerHTML = `
            <div class="texto-seccion">
            <h2>Sobre mí</h2>
            <p>Mi nombre es Jonathan, soy una persona apasionada por la tecnología, con un profundo interés en los desafíos que implican aprender, crear y resolver problemas. Me motiva constantemente adquirir nuevas habilidades y explorar herramientas que expandan mis capacidades.</p>
            <p>Actualmente me encuentro cursando una carrera universitaria vinculada al área de tecnología, mientras complemento mi formación con estudios autodidactas en diferentes herramientas y lenguajes que despiertan mi curiosidad.</p>
            <p>Mi objetivo es seguir creciendo profesionalmente en el mundo IT, asumir nuevos desafíos y aportar valor a proyectos donde pueda aprender, compartir y evolucionar como desarrollador y como persona.</p>
            </div>
        `;
        } else if (seccion === 'projects') {
        contenido.innerHTML = `
            <div class="texto-seccion">
            <h2>Proyectos</h2>
            </div>
        `;
        } else if (seccion === 'herramientas') {
        contenido.innerHTML = `
            <div class="texto-seccion">
            <h2>Herramientas</h2>
            </div>
        `;
        }
        contenido.style.opacity = 1;
    }, 200);
}


