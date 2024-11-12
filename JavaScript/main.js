// Evento de scroll para agregar o quitar la clase 'scrolled' al header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia el número para ajustar cuándo empieza el efecto
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
