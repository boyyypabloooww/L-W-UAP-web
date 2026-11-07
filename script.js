// Adds a shadow to the navbar when the user scrolls down
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});