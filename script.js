// ===== DARK MODE TOGGLE =====
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Vérifie le mode stocké dans localStorage
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  body.classList.add('dark-mode');
  modeToggle.textContent = '☀️'; // Soleil pour le dark mode
}

// Gestion du clic sur le bouton
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Change l'icône et sauvegarde le préférence
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    modeToggle.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// ===== NAVIGATION & CHANGEMENT DE SECTIONS =====
const navButtons = document.querySelectorAll('.casiers button');
const sections = document.querySelectorAll('section');

// Gestion du clic sur les boutons de navigation
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Retire la classe active de tous les boutons et sections
    navButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    // Ajoute la classe active au bouton cliqué
    button.classList.add('active');
    
    // Trouve et active la section correspondante
    const targetSection = document.getElementById(button.dataset.target);
    if (targetSection) {
      targetSection.classList.add('active', 'animate__fadeIn');
    }
  });
});

// ===== FORMULAIRE DE CONTACT =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupère les valeurs du formulaire
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Ici tu peux ajouter l'envoi vers un serveur ou un service comme Formspree
    console.log('Données du formulaire:', data);
    
    // Affiche un message de succès (tu peux personnaliser ça)
    alert('Message envoyé avec succès! Je vous répondrai dès que possible.');
    contactForm.reset();
  });
}

// ===== ANIMATIONS AU SCROLL =====
// Cette fonction ajoute des animations quand les éléments apparaissent à l'écran
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.portfolio-card, .about-grid');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate__fadeInUp');
    }
  });
};

// Écouteur d'événement pour le scroll
window.addEventListener('scroll', animateOnScroll);

// Déclenche une première vérification au chargement
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  
  // Active la section "accueil" par défaut si aucune n'est active
  if (!document.querySelector('section.active')) {
    document.querySelector('#accueil').classList.add('active');
    document.querySelector('[data-target="accueil"]').classList.add('active');
  }
});

// ===== FONCTIONNALITÉS SUPPLEMENTAIRES =====
// 1. Empêche le formulaire de se soumettre avec Enter sauf si c'est intentionnel
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') {
    e.preventDefault();
  }
});

// 2. Smooth scroll pour les ancres (si tu en ajoutes plus tard)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
