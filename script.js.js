gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Scale cursor on links
document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// 2. Smooth Section Reveals
gsap.utils.toArray('.authority-grid, .product-card, .section-heading').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// 3. Hero Parallax
gsap.to(".hero-content", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});