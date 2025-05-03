// Dark Mode + Navigation
document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode
  const modeToggle = document.getElementById('modeToggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌟';
  });

  // Navigation entre sections
  document.querySelectorAll('.casiers button').forEach(button => {
    button.addEventListener('click', () => {
      // Retire la classe active de tous les boutons/sections
      document.querySelectorAll('.casiers button, section').forEach(el => {
        el.classList.remove('active');
      });
      // Ajoute la classe active au bouton et à la section cible
      button.classList.add('active');
      document.getElementById(button.dataset.target).classList.add('active');
    });
  });
});

// Animation au scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.portfolio-item, .card').forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 100) {
      item.classList.add('animate__animated');
    }
  });
});
