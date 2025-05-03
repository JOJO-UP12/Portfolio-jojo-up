// Dark Mode
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌟';
});

// Charger le mode sombre si activé
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  modeToggle.textContent = '☀️';
}

// Navigation
document.querySelectorAll('.casiers button').forEach(button => {
  button.addEventListener('click', () => {
    // Désactive toutes les sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Active la section cible
    const target = document.getElementById(button.dataset.target);
    target.classList.add('active');
    
    // Met à jour la navigation
    document.querySelectorAll('.casiers button').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});
