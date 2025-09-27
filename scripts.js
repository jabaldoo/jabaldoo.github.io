document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    document.addEventListener("mousemove", function(e) {
        const logo = document.querySelector('.logo');
        const x = (window.innerWidth / 2 - e.clientX) / 20;
        const y = (window.innerHeight / 2 - e.clientY) / 20;
        logo.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const popupMenu = document.querySelector('.popup-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        popupMenu.classList.toggle('open');
    });

    const popupLinks = document.querySelectorAll('.popup-menu a');

    popupLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('open');
            popupMenu.classList.remove('open');
        });
    });

    const videoWrappers = document.querySelectorAll('.moje-prace-section .video-wrapper');

    videoWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                wrapper.classList.add('video-active');
                const iframe = wrapper.querySelector('iframe');
                iframe.src += '&autoplay=1';
            }
        });
    });

    const konsultacjaModal = document.getElementById('konsultacja-popup');
    const konsultacjaBtn = document.getElementById('konsultacja-btn');
    const konsultacjaCloseButton = konsultacjaModal.querySelector('.close-button');

    konsultacjaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        konsultacjaModal.style.display = 'block';
        setTimeout(() => konsultacjaModal.classList.add('open'), 10);
    });

    konsultacjaCloseButton.addEventListener('click', () => {
        konsultacjaModal.classList.remove('open');
        setTimeout(() => konsultacjaModal.style.display = 'none', 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target == konsultacjaModal) {
            konsultacjaModal.classList.remove('open');
            setTimeout(() => konsultacjaModal.style.display = 'none', 300);
        }
    });
});
