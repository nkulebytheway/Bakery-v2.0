// Existing scroll animations script
document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    galleries.forEach(gallery => {
        observer.observe(gallery);
    });
});

// CSS for visibility transition
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
    .gallery {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    .gallery.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.cake-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Initialize AOS with optimized settings
AOS.init({
    duration: 1200, // Duration of the animation
    easing: 'ease-in-out', // Type of easing
    once: true, // Animation happens only once - when element comes into view
    mirror: false, // No repeat animations
    offset: 120, // Offset (in pixels) from the original trigger point
    debounceDelay: 50, // Lower debounce delay
    throttleDelay: 99, // Lower throttle delay
});

