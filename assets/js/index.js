// JS específico para index.html (animaciones, slider, contadores, UX)

// Vanilla JS para animar contadores (stats)
function animateCounter(element, target, duration, suffix = '') {
    let start = 0;
    const startTime = performance.now();
    const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        element.textContent = value.toLocaleString() + suffix;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target.toLocaleString() + suffix;
        }
    };
    requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function() {
    // Contadores animados vanilla
    const counters = [
        { id: 'state1', target: 450000, suffix: '+' },
        { id: 'state2', target: 2000000, suffix: '+' },
        { id: 'state3', target: 5000, suffix: '' },
        { id: 'state4', target: 5, suffix: '' }
    ];
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            // Animar cuando el elemento sea visible
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(element, counter.target, 2000, counter.suffix);
                        obs.unobserve(entry.target);
                    }
                });
            });
            observer.observe(element);
        }
    });

    // Mejorar efectos de hover en las tarjetas de servicios
    const serviceCards = document.querySelectorAll('.card-service');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll para enlaces internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });

    // Parallax suave para el hero
    const hero = document.querySelector('.slider-container');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Animación de aparición para elementos al hacer scroll
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
    const animatedElements = document.querySelectorAll('.logos-grid-unified .logo-item, .footer-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Actualizar año de copyright
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Mejorar la experiencia del slider
    const slides = document.querySelectorAll('.slide');
    const textElements = {
        superior: document.getElementById('texto-superior'),
        principal: document.getElementById('texto-principal'),
        secundario: document.getElementById('texto-secundario')
    };
    function updateSliderText(slide) {
        if (textElements.superior && textElements.principal && textElements.secundario) {
            Object.values(textElements).forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
            });
            setTimeout(() => {
                textElements.superior.textContent = slide.getAttribute('data-texto-superior') || '';
                textElements.principal.textContent = slide.getAttribute('data-texto-principal') || '';
                textElements.secundario.textContent = slide.getAttribute('data-texto-secundario') || '';
                Object.values(textElements).forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 300);
        }
    }
    Object.values(textElements).forEach(el => {
        if (el) {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }
    });

    // Navbar responsive vanilla
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }

    // Efectos adicionales para los logos
    const logoItems = document.querySelectorAll('.logo-item');
    logoItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.1)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
