// Initialize AOS Animations
AOS.init({
    duration: 800,
    once: true,
    offset: 50
});

// 3D Tilt Effect for Hero Code Card
const card = document.querySelector('.code-card');

if(card) {
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth < 768) return; // Disable on mobile

        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;

        card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// Mobile Menu Toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if(toggle) {
    toggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#09090b';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    });
}

// Typing Effect for "Creative Coding" text
// Optional: You can enable this to make the H1 dynamic
/*
const textElement = document.querySelector('.gradient-text');
const texts = ["Creative Coding", "Future Tech", "Web3 Building"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if(count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    // textElement.textContent = letter; // Uncomment to use
    
    if(letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 150);
    }
}());
*/
