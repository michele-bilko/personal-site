document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Typing effect for the hero subtitle
    const typewriter = document.querySelector('.typing-effect');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = '';
        let i = 0;
        
        function typeText() {
            if (i < text.length) {
                typewriter.textContent += text.charAt(i);
                i++;
                setTimeout(typeText, 100);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeText, 1000);
    }

    // // Enhanced terminal window interactions
    // const terminals = document.querySelectorAll('.terminal');
    // terminals.forEach(terminal => {
    //     // Add click effect to terminal dots
    //     const dots = terminal.querySelectorAll('.dot');
    //     dots.forEach((dot, index) => {
    //         dot.addEventListener('click', function() {
    //             if (index === 0) { // Red dot - minimize effect
    //                 terminal.style.transform = 'scale(0.95)';
    //                 setTimeout(() => {
    //                     terminal.style.transform = 'scale(1)';
    //                 }, 200);
    //             } else if (index === 1) { // Yellow dot - maximize effect
    //                 terminal.classList.toggle('maximized');
    //             } else if (index === 2) { // Green dot - pulse effect
    //                 terminal.style.boxShadow = '0 0 40px rgba(27, 43, 125, 0.6)';
    //                 setTimeout(() => {
    //                     terminal.style.boxShadow = '0 0 20px rgba(27, 43, 125, 0.3)';
    //                 }, 300);
    //             }
    //         });
    //     });
    // });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('.section, .terminal, .project-card, .skill-category');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dynamic skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.backgroundColor = '#3A4FFF';
            this.style.color = '#ffffff';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#080E35';
            this.style.color = '#A8B6FF';
        });
    });

    // Add floating animation to code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach((block, index) => {
        // Stagger the animation delay
        block.style.animationDelay = `${index * 0.2}s`;
        block.classList.add('float-animation');
    });

    // Navigation bar background opacity on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > 100) {
            nav.style.backgroundColor = 'rgba(8, 14, 53, 0.98)';
        } else {
            nav.style.backgroundColor = 'rgba(8, 14, 53, 0.95)';
        }
    });

    // konami code
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateDeveloperMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateDeveloperMode() {
        document.body.classList.add('developer-mode');
        

        const message = document.createElement('div');
        message.textContent = 'Konami Time';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #3A4FFF;
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-family: Monaco, monospace;
            z-index: 9999;
            animation: pulse 2s infinite;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    // Console welcome message
    console.log('%chii :3!', 'color: #3A4FFF; font-size: 16px; font-weight: bold;');
    console.log('%cdid you like looking at my code?', 'color: #7A8AFF; font-size: 14px;');
    console.log('%cgo bananas', 'color: #A8B6FF; font-size: 12px;');
    console.log('%ctry the konami code out hehe', 'color: #FFE066; font-size: 12px; font-style: italic;');
});

// Utility function for smooth animations
function animateElement(element, animation, duration = 300) {
    return new Promise(resolve => {
        element.style.animation = `${animation} ${duration}ms ease-in-out`;
        element.addEventListener('animationend', () => {
            element.style.animation = '';
            resolve();
        }, { once: true });
    });
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { animateElement };
}