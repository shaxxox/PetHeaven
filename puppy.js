function openOverlay(element) {
    const overlay = element.querySelector('.overlay');
    overlay.style.display = 'block';
    overlay.style.bottom = '0'; // Slide in from the bottom
}

function closeOverlay() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach((overlay) => {
        overlay.style.bottom = '-100%'; // Slide out to the bottom
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500); // Match the animation duration
    });
}
