document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('#skills .logo');
    let delay = 0;

    logos.forEach(logo => {
        setTimeout(() => {
            logo.style.opacity = 1;
        }, delay);
        delay += 500; // Increase delay for each logo
    });
});
