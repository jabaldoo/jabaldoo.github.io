AOS.init();

document.addEventListener("mousemove", function(e) {
    const logo = document.querySelector('.logo');
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;
    logo.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

const contactModal = document.getElementById('contact-modal');
const contactLink = document.querySelector('a[href="#kontakt"]');
const closeButton = document.querySelector('.close-button');

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.style.display = 'block';
    setTimeout(() => contactModal.classList.add('open'), 10);
});

closeButton.addEventListener('click', () => {
    contactModal.classList.remove('open');
    setTimeout(() => contactModal.style.display = 'none', 300);
});

window.addEventListener('click', (e) => {
    if (e.target == contactModal) {
        contactModal.classList.remove('open');
        setTimeout(() => contactModal.style.display = 'none', 300);
    }
});

if (window.innerWidth <= 768) {
    const navLinks = document.querySelectorAll('.top-nav a');
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.id !== 'about-me') {
            section.style.display = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            if (targetId === 'kontakt') {
                contactModal.style.display = 'block';
                setTimeout(() => contactModal.classList.add('open'), 10);
            } else {
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.style.display = 'block';
                        section.classList.add('active-section');
                    } else {
                        section.style.display = 'none';
                        section.classList.remove('active-section');
                    }
                });
            }
        });
    });
}