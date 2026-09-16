// GSAP SCROLL TRIGGERS
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Movement
const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Nike-Style Reveal Animations
gsap.from(".nike-text", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".release-card", {
    scrollTrigger: {
        trigger: ".release-grid",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});

// MEDIA THEATER LOGIC
function toggleTheater() {
    const theater = document.getElementById('theater-trigger');
    const video = document.getElementById('main-theater-video');
    
    theater.classList.toggle('expanded');
    
    if (theater.classList.contains('expanded')) {
        video.muted = false;
        video.play();
        document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
        video.muted = true;
        video.pause();
        document.body.style.overflow = 'auto'; // Unlock scroll
    }
}

// GALLERY LIGHTBOX
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = src;
    lb.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// VIDEO TESTIMONIALS AUTO-PLAY ON HOVER
const testCards = document.querySelectorAll('.test-video-card');
testCards.forEach(card => {
    const v = card.querySelector('video');
    card.addEventListener('mouseenter', () => v.play());
    card.addEventListener('mouseleave', () => {
        v.pause();
        v.currentTime = 0;
    });
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});