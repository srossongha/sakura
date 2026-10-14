// --- Interactive Center Bloom ---
const container = document.getElementById('container');
let resetTimer = null;

container.addEventListener('click', () => {
  const isBlooming = container.classList.toggle('bloom');

  // Clear any existing reset timer
  clearTimeout(resetTimer);

  // Auto-reset bloom after 4 seconds if bloomed
  if (isBlooming) {
    resetTimer = setTimeout(() => {
      container.classList.remove('bloom');
    }, 4000);
  }
});

// --- Graceful Falling Sakura Petals Rain ---
const petalRain = document.getElementById('petal-rain');
const PETAL_COUNT = 25; // Number of gentle falling background petals

function createPetalRain() {
  if (!petalRain) return;

  for (let i = 0; i < PETAL_COUNT; i++) {
    const petal = document.createElement('div');
    petal.classList.add('falling-petal');

    // Smooth, evenly distributed natural parameters
    const left = Math.random() * 100; // Spread across screen (0% - 100%)
    const size = 18 + Math.random() * 14; // Varying petal sizes (18px - 32px)
    const fallDuration = 7 + Math.random() * 6; // Descent speed (7s - 13s)
    const swayDuration = 2.5 + Math.random() * 2; // Wind sway period (2.5s - 4.5s)
    const delay = -(Math.random() * fallDuration); // Pre-warm so petals are already on screen
    const opacity = 0.55 + Math.random() * 0.4; // Soft depth variation

    petal.style.left = `${left}%`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.35}px`;
    petal.style.opacity = opacity;
    petal.style.animation = `fall ${fallDuration}s linear infinite, sway ${swayDuration}s ease-in-out infinite alternate`;
    petal.style.animationDelay = `${delay}s, ${delay}s`;

    petalRain.appendChild(petal);
  }
}

createPetalRain();
