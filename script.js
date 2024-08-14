// menu dropdown

function toggleMenu() {
  var menuDropdown = document.getElementById("menu-dropdown");
  menuDropdown.style.display = menuDropdown.style.display === "none" ? "block" : "none";
}

function hideMenu() {
  document.getElementById("menu-dropdown").style.display = "none";
}

// carousel
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  let currentIndex = 0;
  let autoplayInterval;

  function showSlide(index) {
      if (index >= totalSlides) currentIndex = 0;
      else if (index < 0) currentIndex = totalSlides - 1;
      else currentIndex = index;

      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }

  function startAutoplay() {
      autoplayInterval = setInterval(function() {
          showSlide(currentIndex + 1);
      }, 3000); // Change slide every 3 seconds
  }

  function stopAutoplay() {
      clearInterval(autoplayInterval);
  }

  nextButton.addEventListener('click', function() {
      showSlide(currentIndex + 1);
  });

  prevButton.addEventListener('click', function() {
      showSlide(currentIndex - 1);
  });

  // Start autoplay when the page loads
  startAutoplay();

  // Optionally, stop autoplay when user interacts with controls (like clicking the next or prev buttons)
  nextButton.addEventListener('click', stopAutoplay);
  prevButton.addEventListener('click', stopAutoplay);
});
