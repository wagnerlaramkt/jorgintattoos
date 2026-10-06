import { siteConfig } from './config/siteConfig.js';
import { content } from './data/content.js';

document.addEventListener('DOMContentLoaded', () => {
  initData();
  initWhatsappLinks();
  initMobileMenu();
  initHeaderScroll();
  initAccordion();
  initScrollAnimations();
});

function initData() {
  // Configs
  document.title = `${siteConfig.artistName} | ${siteConfig.location}`;
  document.getElementById('logo-text').textContent = siteConfig.artistName;
  document.getElementById('footer-logo').textContent = siteConfig.artistName;
  document.getElementById('footer-artist-name').textContent = siteConfig.artistName;
  document.getElementById('footer-instagram').innerHTML = `<a href="https://www.instagram.com/jorgintattoos/" target="_blank" rel="noopener noreferrer">${siteConfig.instagram}</a>`;
  
  // Hero
  document.getElementById('hero-badge').innerHTML = content.hero.badge;
  document.getElementById('hero-headline').innerHTML = content.hero.headline;
  document.getElementById('hero-subtext').textContent = content.hero.subtext;

  // Positioning
  document.getElementById('pos-title').innerHTML = content.positioning.title;
  document.getElementById('pos-text').innerHTML = content.positioning.text;
  const posItemsContainer = document.getElementById('pos-items');
  content.positioning.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'editorial-item fade-in-up';
    div.textContent = item;
    posItemsContainer.appendChild(div);
  });

  // Portfolio
  const portfolioGallery = document.getElementById('portfolio-gallery');
  content.portfolio.forEach(item => {
    const div = document.createElement('div');
    div.className = `mosaic-item ${item.class} fade-in-up`;
    div.innerHTML = `
      <img src="${item.src}" alt="${item.category}" loading="lazy">
      <div class="mosaic-label">${item.category}</div>
    `;
    portfolioGallery.appendChild(div);
  });

  // Styles
  const stylesList = document.getElementById('styles-list');
  content.styles.forEach(style => {
    const div = document.createElement('div');
    div.className = 'style-card fade-in-up';
    div.innerHTML = `
      <img src="${style.img}" alt="${style.name}" class="style-img" loading="lazy">
      <div class="style-info">
        <div class="style-num">${style.id}</div>
        <div class="style-name">${style.name}</div>
      </div>
    `;
    stylesList.appendChild(div);
  });

  // Artist
  document.getElementById('artist-title').textContent = content.artist.title;
  document.getElementById('artist-text').innerHTML = content.artist.text;
  document.getElementById('artist-loc').textContent = siteConfig.location;
  document.getElementById('artist-img').src = content.artist.img;

  // Process
  const processTimeline = document.getElementById('process-timeline');
  content.process.forEach(step => {
    const div = document.createElement('div');
    div.className = 'timeline-item fade-in-up';
    div.innerHTML = `
      <div class="process-num">${step.num}</div>
      <h3 class="process-title">${step.title}</h3>
      <p class="process-text">${step.text}</p>
    `;
    processTimeline.appendChild(div);
  });

  // Reviews
  const reviewsGrid = document.getElementById('reviews-grid');
  content.reviews.forEach(review => {
    const div = document.createElement('div');
    div.className = 'review-item fade-in-up';
    div.innerHTML = `
      <div class="stars">${review.stars}</div>
      <p class="review-text">"${review.text}"</p>
      <div class="review-author">— ${review.author}</div>
    `;
    reviewsGrid.appendChild(div);
  });

  // Impact
  const impactGrid = document.getElementById('impact-grid');
  const impacts = [
    { num: siteConfig.stats.tattoos, label: "TATUAGENS REALIZADAS" },
    { num: siteConfig.stats.clients, label: "CLIENTES ATENDIDOS" },
    { num: siteConfig.stats.experience, label: "DE EXPERIÊNCIA" },
    { num: siteConfig.stats.location, label: "PARANÁ" },
  ];
  impacts.forEach(impact => {
    const div = document.createElement('div');
    div.className = 'fade-in-up';
    div.innerHTML = `
      <div class="impact-num">${impact.num}</div>
      <div class="impact-label">${impact.label}</div>
    `;
    impactGrid.appendChild(div);
  });

  // FAQ
  const faqAccordion = document.getElementById('faq-accordion');
  content.faq.forEach(faq => {
    const div = document.createElement('div');
    div.className = 'accordion-item fade-in-up';
    div.innerHTML = `
      <button class="accordion-btn">
        <span>${faq.q}</span>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content">
        <p>${faq.a}</p>
      </div>
    `;
    faqAccordion.appendChild(div);
  });

  // Final
  document.getElementById('final-loc-text').textContent = `Atendimento em ${siteConfig.location}`;
}

function initWhatsappLinks() {
  const waUrl = `https://wa.me/5541998520826?text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20fazer%20uma%20tatuagem.`;
  
  const waLinks = document.querySelectorAll('.whatsapp-link');
  waLinks.forEach(link => {
    link.href = waUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  const links = document.querySelectorAll('.mobile-link');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
      btn.children[0].style.transform = 'translateY(7px) rotate(45deg)';
      btn.children[1].style.opacity = '0';
      btn.children[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      btn.children[0].style.transform = 'none';
      btn.children[1].style.opacity = '1';
      btn.children[2].style.transform = 'none';
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.children[0].style.transform = 'none';
      btn.children[1].style.opacity = '1';
      btn.children[2].style.transform = 'none';
    });
  });
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initAccordion() {
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.parentElement;
      const isActive = parent.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked if it wasn't active
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // observer.unobserve(entry.target); // keep it to animate only once, or remove to animate always
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    observer.observe(el);
  });
}
