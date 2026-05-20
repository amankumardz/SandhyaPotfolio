const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".fade-in, .reveal-up").forEach((el) => observer.observe(el));

const blobContainer = document.querySelector(".bg-blobs");
const colors = ["#ffd6e7", "#e9dcff", "#ffe8d8", "#f3ddff"];

for (let i = 0; i < 12; i += 1) {
  const blob = document.createElement("span");
  blob.className = "blob";
  const size = 36 + Math.random() * 90;
  blob.style.width = `${size}px`;
  blob.style.height = `${size}px`;
  blob.style.left = `${Math.random() * 100}%`;
  blob.style.top = `${65 + Math.random() * 45}%`;
  blob.style.background = colors[i % colors.length];
  blob.style.animationDuration = `${14 + Math.random() * 20}s`;
  blob.style.animationDelay = `${Math.random() * 6}s`;
  blobContainer.appendChild(blob);
}
