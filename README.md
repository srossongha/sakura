# Sakura 🌸

A lightweight, interactive cherry blossom animation crafted with pure HTML, CSS, and modern JavaScript.

## ✨ Features

- **Ambient Petal Shower**: Continuous cherry blossom petals drifting gracefully across the viewport with realistic wind sway and 3D fluttering.
- **Pre-warmed Animation**: Petals are already in mid-fall when the page loads—no jarring delays.
- **Interactive 360° Blossom**: A symmetrical 5-petal sakura flower with green leaf accents centered on screen.
- **Click to Bloom**: Click the flower to trigger an expansive spring bloom animation with an enhanced radiant glow.
- **Auto-Reset**: Smoothly returns to resting state after 4 seconds (or upon a second click).
- **Zero Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript—no external libraries needed.

## 📁 File Structure

- [`index.html`](index.html) — Core markup, viewport setup, and container elements.
- [`style.css`](style.css) — Radial gradients, 360° petal geometry, keyframe physics, and transitions.
- [`script.js`](script.js) — Procedural ambient petal rain generation and interactive click handler.

## 🚀 Getting Started

Simply open [`index.html`](index.html) in any modern web browser, or launch a local static server:

```bash
# Using Python's built-in HTTP server
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## 🎮 Interaction

- **Click the flower** to watch it blossom into full bloom.
- **Click again** (or wait 4 seconds) to return to the gentle resting state.
