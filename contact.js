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
  
  