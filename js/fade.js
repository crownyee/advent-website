document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, { threshold: 0 });

    const images = document.querySelectorAll('.row .image img');
    images.forEach(img => {
        observer.observe(img);
    });

    const memberBoxes = document.querySelectorAll('.member-box');
    memberBoxes.forEach(box => {
        observer.observe(box);
    });
});

