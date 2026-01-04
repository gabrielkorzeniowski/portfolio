// Pobranie wszystkich sekcji z obrazkami
const sections = document.querySelectorAll('.image-section');

// IntersectionObserver do animacji wjazdu zdjęć
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const image = entry.target.querySelector('.image');
      if (!image) return;

      if (entry.isIntersecting) {
        image.classList.add('show');
      } else {
        image.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.25 // wyzwala animację, gdy 25% sekcji jest widoczne
  }
);

// Obserwacja wszystkich sekcji
sections.forEach(section => observer.observe(section));

// Parallax tła - tylko na desktopie
function handleParallax() {
  const isMobile = window.innerWidth <= 768; // breakpoint mobilny
  if (isMobile) {
    // Mobilne: brak paralaksy, tło stałe
    document.body.style.backgroundPosition = 'center top';
  } else {
    // Desktop: paralaksa działa
    const scrollY = window.scrollY;
    document.body.style.backgroundPosition = `center ${-scrollY * 0.1}px`;
  }
}

// Wywołanie przy scrollu
window.addEventListener('scroll', handleParallax);
// Wywołanie przy zmianie rozmiaru okna
window.addEventListener('resize', handleParallax);
// Wywołanie raz przy załadowaniu strony
handleParallax();
