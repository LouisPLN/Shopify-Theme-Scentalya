const sr = ScrollReveal();

sr.reveal("#appearOne", {
  distance: "20px",
  origin: "bottom",
  duration: 800,
  opacity: 0,
});

sr.reveal("#appearTwo", {
  distance: "40px",
  origin: "bottom",
  duration: 800,
  delay: 100,
  opacity: 0,
});

sr.reveal("#appearThree", {
  distance: "60px",
  origin: "bottom",
  duration: 800,
  delay: 300,
  opacity: 0,
});
