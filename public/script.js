// Neal.fun inspired JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeProjects();
    initializeAnimations();
});

function initializeProjects() {
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');
    
    projectCards.forEach(card => {
        // Add subtle hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });

        // Add click feedback
        card.addEventListener('click', function(e) {
            // Subtle click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

function initializeAnimations() {
    // Staggered fade-in animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    projectCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(card);
    });
}

// Add smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});

// Simple analytics (optional)
function trackEvent(eventName, data = {}) {
    // You can integrate with Google Analytics or other tracking here
    console.log('Event:', eventName, data);
} 