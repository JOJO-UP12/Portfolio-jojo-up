// Mode Sombre/Clair
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = modeToggle.querySelector('.mode-icon');
    if (body.classList.contains('dark-mode')) {
        icon.textContent = '🌞'; // Icône soleil en mode sombre
    } else {
        icon.textContent = '🌟'; // Icône étoile en mode clair
    }
});

// Navigation par Casiers
const casiers = document.querySelectorAll('.casiers button');
const sections = document.querySelectorAll('section');

casiers.forEach((casier, index) => {
    casier.addEventListener('click', () => {
        // Désactiver tous les casiers et sections
        casiers.forEach(c => c.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active', 'prev', 'next'));

        // Activer le casier et la section correspondante
        casier.classList.add('active');
        const target = document.getElementById(casier.getAttribute('data-target'));
        target.classList.add('active');

        // Ajouter les classes "prev" et "next" pour les sections adjacentes
        sections.forEach((section, i) => {
            if (i < index) {
                section.classList.add('prev');
            } else if (i > index) {
                section.classList.add('next');
            }
        });
    });
});

// Balayage des Casiers (Swipe)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Sensibilité du balayage
    if (touchEndX < touchStartX - swipeThreshold) {
        // Balayage vers la gauche
        switchToNextSection();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Balayage vers la droite
        switchToPreviousSection();
    }
}

function switchToNextSection() {
    const activeCasier = document.querySelector('.casiers button.active');
    const nextCasier = activeCasier.nextElementSibling || casiers[0]; // Revenir au début si on est à la fin
    nextCasier.click(); // Simuler un clic sur le casier suivant
}

function switchToPreviousSection() {
    const activeCasier = document.querySelector('.casiers button.active');
    const previousCasier = activeCasier.previousElementSibling || casiers[casiers.length - 1]; // Revenir à la fin si on est au début
    previousCasier.click(); // Simuler un clic sur le casier précédent
}

// Animations supplémentaires
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
