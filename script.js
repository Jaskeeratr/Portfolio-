const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const roleRotator = document.getElementById("role-rotator");
const revealNodes = document.querySelectorAll(".reveal");
const statNumbers = document.querySelectorAll(".stat-number");
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 14);
});

const roles = [
  "Data Engineering",
  "Full-Stack Product Development",
  "Backend Systems",
  "AI-Powered Applications",
];

let roleIndex = 0;
if (roleRotator) {
  setInterval(() => {
    roleRotator.style.opacity = "0";
    roleRotator.style.transform = "translateY(4px)";
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleRotator.textContent = roles[roleIndex];
      roleRotator.style.opacity = "1";
      roleRotator.style.transform = "translateY(0)";
    }, 200);
  }, 2600);
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

function animateCounter(node) {
  const target = Number.parseFloat(node.dataset.target || "0");
  const suffix = node.dataset.suffix || "";
  const decimals = Number.parseInt(node.dataset.decimals || "0", 10);
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 4;
    const value = target * eased;
    const text = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
    node.textContent = `${text}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach((node) => statObserver.observe(node));
