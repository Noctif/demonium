const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");
let currentImage = 0;
let isHovering = false;
let intervalId = null;

function slideImages() {
  images[currentImage].style.transform = "translateX(-100%)";
  currentImage = (currentImage + 1) % images.length;
  if (currentImage === 0) {
    // Réinitialiser les images pour créer une boucle infinie
    images.forEach((image, index) => {
      image.style.transform =
        index === 0 ? "translateX(0)" : "translateX(100%)";
    });
  } else {
    images[currentImage].style.transform = "translateX(0)";
  }
}

// Fonction pour activer/désactiver le défilement
function toggleSlideshow(event) {
  isHovering = event.type === "mouseover";
  if (isHovering) {
    intervalId = setInterval(slideImages, 1000); // défilement toutes les secondes
  } else {
    clearInterval(intervalId);
    currentImage = 0;
    images.forEach((image, index) => {
      image.style.transform =
        index === 0 ? "translateX(0)" : "translateX(100%)";
    });
  }
}

// Ajout des événements
gallery.addEventListener("mouseover", toggleSlideshow);
gallery.addEventListener("mouseout", toggleSlideshow);
