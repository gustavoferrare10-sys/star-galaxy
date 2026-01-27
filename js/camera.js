let dragging = false;

app.view.addEventListener("mousedown", () => dragging = true);
app.view.addEventListener("mouseup", () => dragging = false);
app.view.addEventListener("mouseleave", () => dragging = false);

app.view.addEventListener("mousemove", e => {
  if (dragging) {
    galaxy.x += e.movementX;
    galaxy.y += e.movementY;
  }
});

app.view.addEventListener("wheel", e => {
  const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
  galaxy.scale.x *= zoomFactor;
  galaxy.scale.y *= zoomFactor;
});
