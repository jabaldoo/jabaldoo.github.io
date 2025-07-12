AOS.init();

document.addEventListener("mousemove", function(e) {
    const logo = document.querySelector('.logo');
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;
    logo.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
