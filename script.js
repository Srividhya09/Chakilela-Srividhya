/* ========================================
   Portfolio Website - JavaScript
   Created for: Chakilela Srividhya
   ======================================== */

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.getElementById('typingText');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');

// Typing Animation - Updated for Srividhya
const roles = [
    'Aspiring ML Engineer',
    'AI & Data Engineering Enthusiast',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    } else {
        // Default to dark theme
        document.body.setAttribute('data-theme', 'dark');
    }
}

// Navbar Scroll Effect
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth Scroll for Navigation Links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    closeMobileMenu();
}

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Skill Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('style').split('--progress: ')[1].split('%')[0];
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                }
            });
        }, { threshold: 0.5 });
        
        observer(bar);
    });
}

// Form Submission - Using Formspree AJAX with custom success message
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const userName = form.querySelector('input[name="name"]').value.trim() || "there";
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show sending state
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Submit to Formspree using fetch
        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/xykdbebq', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show custom success message
            showCustomAlert(`Received your message!\n\nThank you ${userName} for reaching out! I'll get back to you soon.`, 'success');
            form.reset();
        } else {
            showCustomAlert('Something went wrong. Please try again.', 'error');
        }
    } catch (error) {
        showCustomAlert('Network error. Please check your connection.', 'error');
    } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}

// Custom Alert Modal function
function showCustomAlert(message, type) {
    const modal = document.createElement('div');
    modal.className = 'custom-alert-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'custom-alert-content ' + type;
    
    const icon = document.createElement('div');
    icon.className = 'custom-alert-icon';
    icon.innerHTML = type === 'success' ? '&#10004;' : '&#10008;';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'custom-alert-message';
    messageDiv.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'custom-alert-close';
    closeBtn.innerHTML = 'OK';
    closeBtn.onclick = function() { modal.remove(); };
    
    modalContent.appendChild(icon);
    modalContent.appendChild(messageDiv);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
    });
}

// Active Navigation Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    typeEffect();
    animateSkillBars();
    
    // Add reveal class to sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('reveal');
    });
});

// Event Listeners
window.addEventListener('scroll', () => {
    handleScroll();
    revealOnScroll();
    updateActiveNavLink();
});

hamburger.addEventListener('click', toggleMobileMenu);

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Add staggered animation classes to cards
document.querySelectorAll('.project-card, .internship-card, .certification-card').forEach((card, index) => {
    card.classList.add('reveal');
    card.classList.add(`stagger-${(index % 6) + 1}`);
});

document.querySelectorAll('.education-card').forEach((card, index) => {
    card.classList.add('reveal');
    card.classList.add(`stagger-${index + 1}`);
});

document.querySelectorAll('.skills-category').forEach((category, index) => {
    category.classList.add('reveal');
    category.classList.add(`stagger-${index + 1}`);
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console message for developers
console.log('%c🎨 Portfolio by Chakilela Srividhya', 'color: #00d4aa; font-size: 20px; font-weight: bold;');
console.log('%cCrafted with curiosity and code', 'color: #7c3aed; font-size: 14px;');
