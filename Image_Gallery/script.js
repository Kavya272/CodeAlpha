// Direct Image URLs
const images = [
    "https://via.placeholder.com/1024x768?text=Image+1",
    "https://via.placeholder.com/1024x768?text=Image+2",
    "https://via.placeholder.com/1024x768?text=Image+3",
    "https://via.placeholder.com/1024x768?text=Image+4",
    "https://via.placeholder.com/1024x768?text=Image+5",
    "https://via.placeholder.com/1024x768?text=Image+6",
  ];
  
  let currentIndex = 0;
  
  // Open Lightbox
  function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex];
  }
  
  // Close Lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  
  // Navigate Images
  function navigateImage(direction) {
    currentIndex += direction;
  
    // Loop navigation
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex];
  }
  