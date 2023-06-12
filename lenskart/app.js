document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = Array.from(carousel.children);
    const dotContainer = document.querySelector(".dot-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
  
    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        moveToSlide(index);
      });
      dotContainer.appendChild(dot);
    });
  
    const dots = Array.from(dotContainer.children);
    dots[currentIndex].classList.add("active");
  
    // Arrange slides horizontally
    function setSlidePosition(slide, index) {
      slide.style.left = slideWidth * index + "px";
    }
  
    slides.forEach(setSlidePosition);
  
    // Move to the selected slide
    function moveToSlide(index) {
      carousel.style.transform = `translateX(-${slideWidth * index}px)`;
      currentIndex = index;
      updateDots();
    }
  
    // Update dot indicators
    function updateDots() {
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }
  
    // Next button click event
    nextBtn.addEventListener("click", () => {
      if (currentIndex === slides.length - 1) {
        moveToSlide(0);
      } else {
        moveToSlide(currentIndex + 1);
      }
    });
  
    // Previous button click event
    prevBtn.addEventListener("click", () => {
      if (currentIndex === 0) {
        moveToSlide(slides.length - 1);
      } else {
        moveToSlide(currentIndex - 1);
      }
    });
  
    // Continuous slide animation
    setInterval(() => {
      if (currentIndex === slides.length - 1) {
        moveToSlide(0);
      } else {
        moveToSlide(currentIndex + 1);
      }
    }, 3000);
  });
  