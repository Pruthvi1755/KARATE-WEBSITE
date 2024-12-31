const galleryItems = document.querySelectorAll('.gallery-item');
const totalItems = galleryItems.length;
let currentIndex = 2; // Start with the center image (index starts at 0)
let autoplayInterval;

// Function to update the gallery positions
function updateGallery() {
  galleryItems.forEach((item, index) => {
    item.classList.remove(
      'gallery-item-1',
      'gallery-item-2',
      'gallery-item-3',
      'gallery-item-4',
      'gallery-item-5'
    );
  });

  // Dynamically assign classes based on currentIndex
  galleryItems[getCircularIndex(currentIndex - 2)].classList.add('gallery-item-1');
  galleryItems[getCircularIndex(currentIndex - 1)].classList.add('gallery-item-2');
  galleryItems[getCircularIndex(currentIndex)].classList.add('gallery-item-3');
  galleryItems[getCircularIndex(currentIndex + 1)].classList.add('gallery-item-4');
  galleryItems[getCircularIndex(currentIndex + 2)].classList.add('gallery-item-5');
}

// Utility function to handle circular indexing
function getCircularIndex(index) {
  return (index + totalItems) % totalItems;
}

// Autoplay function
function autoplay() {
  currentIndex = getCircularIndex(currentIndex + 1);
  updateGallery();
}

// Click event listener to bring an image to the center
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateGallery();
  });
});

// Start autoplay
function startAutoplay() {
  autoplayInterval = setInterval(autoplay, 2000); // 3 seconds
}

// Pause autoplay on hover
document.querySelector('.gallery-container').addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
});

// Resume autoplay on mouse leave
document.querySelector('.gallery-container').addEventListener('mouseleave', startAutoplay);

// Initialize the gallery
updateGallery();
startAutoplay();
