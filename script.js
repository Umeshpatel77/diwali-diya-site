
// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").textContent =
    "🎉 Thank you! Your message has been sent successfully.";
  this.reset();
});

// Carousel Functionality
const handiImages = [
  "./photos/handi1.jpg",
  "./photos/handi2.jpg",
  "./photos/handi3.jpg",
  "./photos/handi4.jpg",
  "./photos/handi5.jpg",
  "./photos/handi6.jpg",
  "./photos/handi7.jpg"
];

let current = 0;
const handiImage = document.getElementById("handiImage");

document.querySelector(".next").addEventListener("click", () => {
  current = (current + 1) % handiImages.length;
  handiImage.src = handiImages[current];
});

document.querySelector(".prev").addEventListener("click", () => {
  current = (current - 1 + handiImages.length) % handiImages.length;
  handiImage.src = handiImages[current];
});








































// 🌟 Animated Floating Lights Background
const canvas = document.getElementById("animated-bg");
const ctx = canvas.getContext("2d");
let w, h, particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    color: `hsl(${Math.random() * 60 + 20}, 100%, 70%)`
  });
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > w) p.speedX *= -1;
    if (p.y < 0 || p.y > h) p.speedY *= -1;
  }
  requestAnimationFrame(animate);
}
animate();
