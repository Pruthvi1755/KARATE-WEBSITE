window.addEventListener("load", function () {
    // Hide the preloader
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; // Fade out effect
    preloader.style.transition = "opacity 0.5s ease";
  
    // After fade-out, remove preloader from DOM
    setTimeout(() => {
        preloader.style.display = "none"; // Remove the preloader
        document.getElementById("main-content").style.display = "block"; // Show the main content
    }, 500); // Matches the fade-out transition time
  });
  

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to trigger animation when elements are scrolled into view
function triggerAnimationsOnScroll() {
    const blackline2 = document.querySelector('.blackline2');
    const aboutusH3 = document.querySelector('.aboutus h3');
    
    if (isInViewport(blackline2)) {
        blackline2.classList.add('inst');
    }
    
    if (isInViewport(aboutusH3)) {
        aboutusH3.classList.add('inst');
    }
}