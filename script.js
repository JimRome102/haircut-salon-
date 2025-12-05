// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Gallery Images Data
const galleryImages = [
    { src: 'images/haircut-9e113c86778d46108d80af7d1cd353fb.png', alt: 'Haircut service' },
    { src: 'images/Screenshot%202025-12-05%20at%2010.14.05%20AM.png', alt: 'Salon work' },
    { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=800&fit=crop', alt: 'Professional haircut transformation' },
    { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop', alt: 'Stylist working on client' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', alt: 'Modern salon interior' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop', alt: 'Hair coloring service' },
    { src: 'https://images.unsplash.com/photo-1560869713-7d563b02980f?w=800&h=800&fit=crop', alt: 'Before and after haircut' },
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop', alt: 'Professional styling service' },
    { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop', alt: 'Men\'s haircut service' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop', alt: 'Women\'s haircut and styling' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', alt: 'Salon workspace' },
    { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=800&fit=crop', alt: 'Hair treatment service' },
    { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=800&fit=crop', alt: 'Expert stylist at work' },
    { src: 'https://images.unsplash.com/photo-1585747860715-2baeececf3df?w=800&h=800&fit=crop', alt: 'Beautiful hair transformation' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', alt: 'Modern haircut style' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop', alt: 'Color and cut service' },
    { src: 'https://images.unsplash.com/photo-1560869713-7d563b02980f?w=800&h=800&fit=crop', alt: 'Professional hair styling' },
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop', alt: 'Salon atmosphere' },
    { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop', alt: 'Haircut consultation' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop', alt: 'Styling and finishing' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', alt: 'Client satisfaction' },
    { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=800&fit=crop', alt: 'Expert hair cutting' },
    { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=800&fit=crop', alt: 'Professional service' },
    { src: 'https://images.unsplash.com/photo-1585747860715-2baeececf3df?w=800&h=800&fit=crop', alt: 'Hair transformation' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', alt: 'Modern salon experience' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop', alt: 'Color specialist at work' },
    { src: 'https://images.unsplash.com/photo-1560869713-7d563b02980f?w=800&h=800&fit=crop', alt: 'Beautiful hair results' },
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop', alt: 'Stylist expertise' },
    { src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop', alt: 'Haircut precision' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop', alt: 'Complete hair service' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', alt: 'Salon quality service' },
    { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=800&fit=crop', alt: 'Professional hair care' }
];

// Populate Gallery with Lazy Loading
const galleryGrid = document.getElementById('galleryGrid');
let currentImageIndex = 0;

function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-index', index);
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(index));
    
    return item;
}

function populateGallery() {
    galleryImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });
}

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    const image = galleryImages[currentImageIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.alt;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPrevImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (in a real app, this would send to a server)
    showFormMessage('Thank you! Your appointment request has been received. We will contact you soon.', 'success');
    contactForm.reset();
    
    // Scroll to form message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// Set minimum date for appointment date picker to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Initialize Gallery on Page Load
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other sections
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});



