document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const topOffset = 60; // Adjust this value according to your header's height

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - topOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toggle navigation for small screens
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
