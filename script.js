// Pobranie wszystkich sekcji z obrazkami
const sections = document.querySelectorAll('.image-section');

// IntersectionObserver do animacji wjazdu zdjęć
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const image = entry.target.querySelector('.image');
      if (!image) return;

      if (entry.isIntersecting) {
        // Dodaj klasę show - wjazd zdjęcia
        image.classList.add('show');
      } else {
        // Usuń klasę show, jeśli sekcja nie jest widoczna
        image.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.25 // wyzwala animację, gdy 35% sekcji jest widoczne
  }
);

// Obserwacja wszystkich sekcji
sections.forEach(section => observer.observe(section));

// Parallax tła
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.body.style.backgroundPosition = `center ${-scrollY * 0.1}px`;
});
