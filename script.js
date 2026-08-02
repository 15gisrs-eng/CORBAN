const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();


// Interactive India coverage markers
const regionInfo = document.getElementById('regionInfo');
const regionMarkers = document.querySelectorAll('.map-marker');

regionMarkers.forEach(marker => {
  marker.addEventListener('click', () => {
    regionMarkers.forEach(item => item.classList.remove('active'));
    marker.classList.add('active');

    const title = marker.dataset.region;
    const detail = marker.dataset.detail;

    regionInfo.innerHTML = `
      <span>Selected region</span>
      <strong>${title}</strong>
      <p>${detail}</p>
    `;
  });
});
