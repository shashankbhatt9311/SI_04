document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.section-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Toggle between showing and hiding content
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
