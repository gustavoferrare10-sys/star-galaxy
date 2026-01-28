
let dragging = false;

// segurança: evita erro se parallax ainda não carregou
const hasParallax = () => Array.isArray(window.starLayers);

app.view.addEventListener("mousedown", () => {
  dragging = true;
});

app.view.addEventListener("mouseup", () => {
  dragging = false;
});

app.view.addEventListener("mouseleave", () => {
  dragging = false;
});

app.view.addEventListener("mousemove", e => {
  if (!dragging) return;

  const dx = e.movementX;
  const dy = e.movementY;

  // move a galáxia
  galaxy.x += dx;
  galaxy.y += dy;

  // 🌠 parallax (se existir)
  if (hasParallax()) {
    window.starLayers.forEach(layer => {
      layer.x += dx * layer.speed;
      layer.y += dy * layer.speed;
    });
  }
});

app.view.addEventListener("wheel", e => {
  e.preventDefault();

  const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
  galaxy.scale.x *= zoomFactor;
  galaxy.scale.y *= zoomFactor;
}, { passive: false });


